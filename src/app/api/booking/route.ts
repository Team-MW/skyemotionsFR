import { NextResponse } from "next/server";
import { getPaidPaiementSession, getStripe } from "@/lib/stripe";

type BookingBody = {
  sessionId?: string;
  jotformComplete?: boolean;
};

export async function POST(req: Request) {
  let body: BookingBody;

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
    return NextResponse.json({ ok: true, alreadyComplete: true });
  }

  if (body.jotformComplete !== true) {
    return NextResponse.json(
      { error: "Confirmation JotForm manquante." },
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

  try {
    await stripe.checkout.sessions.update(sessionId, {
      metadata: {
        booking_complete: "true",
        booking_source: "jotform",
        booking_form_id: "262654050523350",
        booked_at: new Date().toISOString(),
      },
    });
  } catch (err) {
    console.error("[booking] metadata update failed", err);
    return NextResponse.json(
      { error: "Impossible d’enregistrer la réservation. Réessaie." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
