import { NextResponse } from "next/server";
import { getPaidPaiementSession } from "@/lib/stripe";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { sessionId, data } = body;

    if (!sessionId) {
      return NextResponse.json({ error: "Session invalide" }, { status: 400 });
    }

    const session = await getPaidPaiementSession(sessionId);
    if (!session) {
      return NextResponse.json({ error: "Paiement non trouvé" }, { status: 403 });
    }

    const AFIFLY_API_BASE = process.env.AFIFLY_API_BASE;
    const AFIFLY_USE_TEST_KEY = process.env.AFIFLY_USE_TEST_KEY === "true";
    const API_KEY = AFIFLY_USE_TEST_KEY
      ? process.env.AFIFLY_API_KEY_TEST
      : process.env.AFIFLY_API_KEY;

    if (!AFIFLY_API_BASE || !API_KEY) {
      return NextResponse.json({ error: "Afifly non configuré" }, { status: 500 });
    }

    // Default pack_id mapping (can be dynamic if needed)
    // Afifly mrgl_id from env (e.g. 7 for Stripe)
    const mrgl_id = Number(process.env.AFIFLY_MRGL_ID) || 7;

    const payload = {
      sautant: {
        firstname: data.firstname,
        lastname: data.lastname,
        born: data.born,
        email: data.email,
        phone: data.phone,
        gender: data.gender,
        weight: data.weight,
        height: data.height,
        city: data.city,
        country: data.country || "France",
        postcode: data.postcode,
        address: data.address,
        force_adherent_creation: 0,
        accept_mail: 1,
      },
      amount_paid: session.amountTotal || 0,
      mrgl_id: mrgl_id,
      pack_id: 7,
      // We can also let Afifly determine it or send options.
    };

    const response = await fetch(`${AFIFLY_API_BASE}/adherent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-token": API_KEY,
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("[AFIFLY ERROR]", result);
      return NextResponse.json({ error: result.message || "Erreur API Afifly" }, { status: 400 });
    }

    return NextResponse.json({ ok: true, data: result });
  } catch (error) {
    console.error("[AFIFLY ERROR]", error);
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}
