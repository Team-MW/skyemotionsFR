import type { Metadata } from "next";
import Link from "next/link";
import ExperienceImageBlocks from "@/components/ExperienceImageBlocks";
import PageHero from "@/components/PageHero";
import ProductCards from "@/components/ProductCards";
import ServicePricingCards from "@/components/ServicePricingCards";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tarifs Sky Emotions : tandem + vidéo dès 269€, VIP hélicoptère, IMAX 360º, vidéo 4K, ticket brevetés et rigger.",
};

export default function TarifsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Tarifs"
        title="Tarifs"
        description="Choisis ton pack, ajoute-le au panier et réserve maintenant ou plus tard. Paiement sécurisé avec Stripe."
      />

      <section className="bg-background px-4 py-14 sm:px-6 sm:py-20">
        <ProductCards />
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-white/50">
          Tarifs en euros. Tu peux enregistrer dans le panier et payer quand tu
          veux.{" "}
          <Link href="/checkout" className="text-accent hover:underline">
            Voir le panier
          </Link>
        </p>
      </section>

      <section className="bg-background px-4 pb-14 sm:px-6 sm:pb-16">
        <ExperienceImageBlocks />
      </section>

      <section className="bg-background px-4 pb-14 sm:px-6 sm:pb-20">
        <ServicePricingCards />
      </section>
    </SiteShell>
  );
}
