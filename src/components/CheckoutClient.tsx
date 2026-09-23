"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatEUR } from "@/lib/catalog";

export default function CheckoutClient() {
  const { itemsDetailed, subtotalCents, count, clear, setOpen } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  async function payWithStripe() {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: itemsDetailed.map((i) => ({
            productId: i.product.id,
            quantity: i.quantity,
          })),
          customerEmail: email || undefined,
        }),
      });
      const data = (await res.json()) as {
        url?: string;
        error?: string;
        demo?: boolean;
      };

      if (!res.ok) {
        setError(data.error || "Impossible de démarrer le paiement.");
        return;
      }

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      setError(data.error || "Stripe n’est pas encore configuré.");
    } catch {
      setError("Erreur réseau. Réessaie.");
    } finally {
      setLoading(false);
    }
  }

  if (count === 0) {
    return (
      <div className="mx-auto max-w-lg py-20 text-center">
        <p className="font-display text-2xl font-bold uppercase text-white">
          Panier vide
        </p>
        <p className="mt-3 text-white/60">
          Ajoute des expériences pour réserver maintenant ou plus tard.
        </p>
        <Link
          href="/reservation"
          className="font-display mt-8 inline-flex bg-accent px-6 py-3 text-sm font-bold uppercase text-black"
        >
          Voir les expériences
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">
          Récapitulatif
        </h2>
        <ul className="mt-6 space-y-4">
          {itemsDetailed.map(({ product, quantity, lineCents }) => (
            <li
              key={product.id}
              className="flex items-start justify-between gap-4 border-b border-white/10 pb-4"
            >
              <div>
                <p className="font-display font-semibold uppercase tracking-wide text-white">
                  {product.name}
                </p>
                <p className="text-sm text-muted">Quantité: {quantity}</p>
              </div>
              <p className="font-display text-accent">{formatEUR(lineCents)}</p>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-4 text-sm text-accent hover:underline"
        >
          Modifier le panier
        </button>
      </div>

      <div className="border border-white/10 bg-surface p-6 sm:p-8">
        <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted">
          Paiement sécurisé · Stripe
        </p>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-white/70">Total</span>
          <span className="font-display text-3xl font-bold text-accent">
            {formatEUR(subtotalCents)}
          </span>
        </div>

        <label className="mt-6 block">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted">
            E-mail (optionnel)
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:border-accent"
            placeholder="toi@email.com"
          />
        </label>

        {error && (
          <p className="mt-4 border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
            {error}
          </p>
        )}

        <button
          type="button"
          disabled={loading}
          onClick={payWithStripe}
          className="font-display mt-6 w-full bg-accent py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-black transition hover:bg-accent-hover disabled:opacity-60"
        >
          {loading ? "Connexion…" : "Payer avec Stripe"}
        </button>

        <p className="mt-4 text-center text-xs leading-relaxed text-white/45">
          Après le paiement, un formulaire exclusif s’ouvrira pour compléter tes
          données du saut. Le panier est enregistré dans ce navigateur.
        </p>

        <button
          type="button"
          onClick={clear}
          className="mt-4 w-full text-center text-xs text-muted hover:text-white"
        >
          Vider le panier
        </button>
      </div>
    </div>
  );
}
