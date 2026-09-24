import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProductCards from "@/components/ProductCards";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Bons cadeaux",
  description:
    "Offre un saut Sky Emotions : tandem + vidéo 299€ ou vidéo + photos 399€.",
};

export default function BonsCadeauxPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Cadeaux"
        title="Bons cadeaux"
        description="Le même pack, à offrir. Ajoute au panier et réserve quand tu veux."
        cta={{ label: "Voir le panier", href: "/checkout" }}
      />
      <section className="bg-background px-4 py-14 sm:px-6 sm:py-20">
        <ProductCards ids={["saut-tandem-video", "saut-tandem-video-photos", "saut-vip"]} />
        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-white/50">
          Tu préfères nous parler ?{" "}
          <Link href="/contact" className="text-accent hover:underline">
            Contact
          </Link>
        </p>
      </section>
    </SiteShell>
  );
}
