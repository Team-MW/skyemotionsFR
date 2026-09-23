import { NextResponse } from "next/server";
import { getPaidPaiementSession, getStripe } from "@/lib/stripe";

export type BookingPayload = {
  sessionId: string;
  fullName: string;
  email: string;
  phone: string;
  birthDate: string;
  weightKg: string;
  preferredDate: string;
  alternateDate?: string;
  emergencyContact?: string;
  notes?: string;
  acceptTerms: boolean;
};

function isNonEmpty(v: unknown, max = 200) {
  return typeof v === "string" && v.trim().length > 0 && v.trim().length <= max;
}

async function notifyBooking(summary: string, html: string) {
  const to = process.env.BOOKING_NOTIFY_EMAIL;
  const key = process.env.RESEND_API_KEY;
  const from =
    process.env.BOOKING_FROM_EMAIL || "Sky Emotions <onboarding@resend.dev>";

  if (!to || !key) {
    console.info(
      "[booking] Formulaire reçu (e-mail non configuré):\n",
      summary,
    );
    return { emailed: false };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: "Nouvelle réservation payée — Sky Emotions",
      text: summary,
      html,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("[booking] Resend error:", errText);
    return { emailed: false };
  }

  return { emailed: true };
}

export async function POST(req: Request) {
  let body: Partial<BookingPayload>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON invalide" }, { status: 400 });
  }

  const sessionId = body.sessionId;
  if (!sessionId || typeof sessionId !== "string") {
    return NextResponse.json({ error: "Session non valide" }, { status: 401 });
  }

  const paid = await getPaidPaiementSession(sessionId);
  if (!paid) {
    return NextResponse.json(
      { error: "Accès refusé. Le paiement n’est pas confirmé." },
      { status: 403 },
    );
  }

  if (paid.bookingComplete) {
    return NextResponse.json(
      { error: "Ce formulaire a déjà été envoyé pour ce paiement." },
      { status: 409 },
    );
  }

  if (
    !isNonEmpty(body.fullName, 120) ||
    !isNonEmpty(body.email, 160) ||
    !isNonEmpty(body.phone, 40) ||
    !isNonEmpty(body.birthDate, 20) ||
    !isNonEmpty(body.weightKg, 10) ||
    !isNonEmpty(body.preferredDate, 40) ||
    body.acceptTerms !== true
  ) {
    return NextResponse.json(
      { error: "Champs obligatoires manquants." },
      { status: 400 },
    );
  }

  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe n’est pas configuré." },
      { status: 503 },
    );
  }

  const booking = {
    fullName: body.fullName!.trim(),
    email: body.email!.trim(),
    phone: body.phone!.trim(),
    birthDate: body.birthDate!.trim(),
    weightKg: body.weightKg!.trim(),
    preferredDate: body.preferredDate!.trim(),
    alternateDate: (body.alternateDate || "").trim(),
    emergencyContact: (body.emergencyContact || "").trim(),
    notes: (body.notes || "").trim().slice(0, 1000),
    productSummary: paid.productSummary,
    amountTotal: paid.amountTotal,
    paidAt: new Date().toISOString(),
  };

  const summary = [
    `Session: ${sessionId}`,
    `Pack: ${paid.productSummary}`,
    `Montant: ${paid.amountTotal != null ? (paid.amountTotal / 100).toFixed(2) : "?"} ${paid.currency?.toUpperCase() || "EUR"}`,
    `Nom: ${booking.fullName}`,
    `E-mail: ${booking.email}`,
    `Téléphone: ${booking.phone}`,
    `Naissance: ${booking.birthDate}`,
    `Poids: ${booking.weightKg} kg`,
    `Date souhaitée: ${booking.preferredDate}`,
    `Date alternative: ${booking.alternateDate || "—"}`,
    `Contact d’urgence: ${booking.emergencyContact || "—"}`,
    `Notes: ${booking.notes || "—"}`,
  ].join("\n");

  const html = `<pre style="font-family:sans-serif;white-space:pre-wrap">${summary
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")}</pre>`;

  try {
    const payload = JSON.stringify(booking);
    await stripe.checkout.sessions.update(sessionId, {
      metadata: {
        booking_complete: "true",
        booking_name: booking.fullName.slice(0, 450),
        booking_phone: booking.phone.slice(0, 100),
        booking_date: booking.preferredDate.slice(0, 100),
        booking_json: payload.slice(0, 500),
      },
    });
  } catch (err) {
    console.error("[booking] metadata update failed", err);
    return NextResponse.json(
      { error: "Impossible d’enregistrer la réservation. Réessaie." },
      { status: 500 },
    );
  }

  const { emailed } = await notifyBooking(summary, html);

  return NextResponse.json({ ok: true, emailed });
}
