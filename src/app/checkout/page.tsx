import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import CheckoutClient from "@/components/CheckoutClient";

export const metadata: Metadata = {
  title: "Paiement",
  description: "Paie ta réservation Sky Emotions en toute sécurité avec Stripe.",
};

export default function CheckoutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Paiement"
        title="Paiement"
        description="Vérifie ton panier et paie quand tu veux. Tu peux enregistrer et revenir plus tard."
      />
      <section className="bg-background px-4 py-14 sm:px-6 sm:py-20">
        <CheckoutClient />
      </section>
    </SiteShell>
  );
}
