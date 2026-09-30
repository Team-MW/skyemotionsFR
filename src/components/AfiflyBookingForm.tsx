"use client";

import { useState } from "react";
import type { PaidSessionView } from "@/lib/booking-types";

type Props = {
  session: PaidSessionView;
  onSuccess: () => void;
};

export default function AfiflyBookingForm({ session, onSuccess }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/afifly", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: session.id,
          data,
        }),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Erreur lors de l'envoi");
      }

      onSuccess();
    } catch (err: any) {
      setError(err.message || "Impossible d'envoyer les informations.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl border border-white/10 bg-surface px-6 py-10 sm:px-10">
      <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white text-center mb-2">
        Création de ton dossier
      </h2>
      <p className="text-white/60 text-sm text-center mb-8">
        Merci de remplir ces informations officielles pour notre système de réservation.
      </p>

      {error && (
        <div className="mb-6 border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 text-sm text-white">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block uppercase tracking-wider text-muted text-xs">Prénom</span>
            <input required name="firstname" type="text" defaultValue={session.name?.split(" ")[0] || ""} className="w-full border border-white/15 bg-black/40 px-4 py-3 outline-none focus:border-accent" />
          </label>
          <label className="block">
            <span className="mb-1.5 block uppercase tracking-wider text-muted text-xs">Nom</span>
            <input required name="lastname" type="text" defaultValue={session.name?.split(" ").slice(1).join(" ") || ""} className="w-full border border-white/15 bg-black/40 px-4 py-3 outline-none focus:border-accent" />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block uppercase tracking-wider text-muted text-xs">Email</span>
            <input required name="email" type="email" defaultValue={session.email || ""} className="w-full border border-white/15 bg-black/40 px-4 py-3 outline-none focus:border-accent" />
          </label>
          <label className="block">
            <span className="mb-1.5 block uppercase tracking-wider text-muted text-xs">Téléphone</span>
            <input required name="phone" type="tel" className="w-full border border-white/15 bg-black/40 px-4 py-3 outline-none focus:border-accent" />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block uppercase tracking-wider text-muted text-xs">Date de naissance</span>
            <input required name="born" type="date" className="w-full border border-white/15 bg-black/40 px-4 py-3 outline-none focus:border-accent" />
          </label>
          <label className="block">
            <span className="mb-1.5 block uppercase tracking-wider text-muted text-xs">Genre</span>
            <select required name="gender" className="w-full border border-white/15 bg-black/40 px-4 py-3 outline-none focus:border-accent appearance-none">
              <option value="">Sélectionner</option>
              <option value="H">Homme</option>
              <option value="F">Femme</option>
            </select>
          </label>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block uppercase tracking-wider text-muted text-xs">Poids (kg)</span>
            <input required name="weight" type="number" min="30" max="150" className="w-full border border-white/15 bg-black/40 px-4 py-3 outline-none focus:border-accent" />
          </label>
          <label className="block">
            <span className="mb-1.5 block uppercase tracking-wider text-muted text-xs">Taille (cm)</span>
            <input required name="height" type="number" min="120" max="220" className="w-full border border-white/15 bg-black/40 px-4 py-3 outline-none focus:border-accent" />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block uppercase tracking-wider text-muted text-xs">Adresse</span>
            <input required name="address" type="text" className="w-full border border-white/15 bg-black/40 px-4 py-3 outline-none focus:border-accent" />
          </label>
          <label className="block">
            <span className="mb-1.5 block uppercase tracking-wider text-muted text-xs">Code Postal</span>
            <input required name="postcode" type="text" className="w-full border border-white/15 bg-black/40 px-4 py-3 outline-none focus:border-accent" />
          </label>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block uppercase tracking-wider text-muted text-xs">Ville</span>
            <input required name="city" type="text" className="w-full border border-white/15 bg-black/40 px-4 py-3 outline-none focus:border-accent" />
          </label>
          <label className="block">
            <span className="mb-1.5 block uppercase tracking-wider text-muted text-xs">Pays</span>
            <input required name="country" type="text" defaultValue="France" className="w-full border border-white/15 bg-black/40 px-4 py-3 outline-none focus:border-accent" />
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="font-display mt-8 w-full bg-accent py-4 text-sm font-bold uppercase tracking-[0.08em] text-black transition hover:bg-accent-hover disabled:opacity-60"
        >
          {loading ? "Création en cours..." : "Continuer vers l'étape finale"}
        </button>
      </form>
    </div>
  );
}
