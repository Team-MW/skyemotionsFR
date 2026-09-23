"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatEUR } from "@/lib/catalog";
import type { PaidSessionView } from "@/lib/booking-types";

const JOTFORM_ID = "262654050523350";

type Props = {
  session: PaidSessionView;
};

function isJotformSubmission(data: unknown): boolean {
  if (data === "submission-completed") return true;
  if (!data || typeof data !== "object") return false;

  const payload = data as Record<string, unknown>;
  const action = String(payload.action || payload.type || payload.event || "");
  return (
    action === "submission-completed" ||
    action === "form-submit" ||
    action.includes("submission")
  );
}

export default function PostPaymentBookingForm({ session }: Props) {
  const { clear } = useCart();
  const [sent, setSent] = useState(session.bookingComplete);
  const [iframeHeight, setIframeHeight] = useState(1200);

  const formSrc = useMemo(() => {
    const url = new URL(`https://form.jotform.com/${JOTFORM_ID}`);
    if (session.email) url.searchParams.set("email", session.email);
    if (session.name) url.searchParams.set("name", session.name);
    url.searchParams.set("session_id", session.id);
    return url.toString();
  }, [session.email, session.name, session.id]);

  useEffect(() => {
    clear();
  }, [clear]);

  useEffect(() => {
    if (sent) return;

    async function markComplete() {
      setSent(true);
      try {
        await fetch("/api/booking", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId: session.id,
            jotformComplete: true,
          }),
        });
      } catch {
        // Formulaire déjà envoyé côté JotForm — on affiche quand même la confirmation.
      }
    }

    function onMessage(event: MessageEvent) {
      const origin = event.origin || "";
      if (
        origin &&
        !origin.includes("jotform.com") &&
        !origin.includes("jotform.me")
      ) {
        return;
      }

      const data = event.data;

      // JotForm envoie parfois la hauteur pour redimensionner l’iframe.
      if (typeof data === "object" && data !== null) {
        const payload = data as Record<string, unknown>;
        const height = Number(payload.height || payload.iframeHeight);
        if (Number.isFinite(height) && height > 400) {
          setIframeHeight(Math.min(Math.round(height), 4000));
        }
      }

      if (typeof data === "string" && data.includes("setHeight")) {
        const match = data.match(/(\d+)/);
        if (match) {
          const height = Number(match[1]);
          if (Number.isFinite(height) && height > 400) {
            setIframeHeight(Math.min(Math.round(height), 4000));
          }
        }
      }

      if (isJotformSubmission(data)) {
        void markComplete();
      }
    }

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [sent, session.id]);

  if (sent) {
    return (
      <div className="mx-auto max-w-xl border border-white/10 bg-surface px-6 py-14 text-center sm:px-10">
        <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
          Terminé
        </p>
        <h2 className="font-display mt-4 text-3xl font-bold uppercase tracking-wide text-white">
          Formulaire bien reçu !
        </h2>
        <p className="mt-4 text-white/65">
          Merci. Nous avons reçu tes informations. Notre équipe te contactera pour
          confirmer la date du saut.
        </p>
        <Link
          href="/"
          className="font-display mt-10 inline-flex bg-accent px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-black hover:bg-accent-hover"
        >
          Retour à l’accueil
        </Link>
      </div>
    );
  }

  const amountLabel =
    session.amountTotal != null
      ? formatEUR(session.amountTotal).replace(/\s/g, "")
      : null;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 border border-accent/30 bg-accent/5 px-5 py-4 text-center sm:px-6">
        <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-accent">
          Paiement confirmé
        </p>
        <p className="mt-2 text-sm text-white/80">
          {session.productSummary}
          {amountLabel ? ` · ${amountLabel}` : null}
        </p>
        <p className="mt-2 text-sm font-medium text-white">
          Dernière étape obligatoire : complète le formulaire ci-dessous pour
          finaliser ta réservation.
        </p>
        <p className="mt-1 text-xs text-white/45">
          Sans ce formulaire, nous ne pouvons pas organiser ton saut. Cette page
          n’est accessible qu’après un paiement Stripe réussi.
        </p>
      </div>

      <div className="overflow-hidden border border-white/10 bg-white">
        <iframe
          id={`JotFormIFrame-${JOTFORM_ID}`}
          title="Formulaire de réservation Sky Emotions"
          src={formSrc}
          allow="geolocation; microphone; camera; fullscreen"
          style={{
            width: "100%",
            minWidth: "100%",
            height: iframeHeight,
            border: "none",
          }}
          scrolling="no"
        />
      </div>
    </div>
  );
}
