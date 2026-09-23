import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Conditions pour sauter",
  description:
    "Conditions pour réaliser un saut en tandem avec Sky Emotions : âge, poids, santé et équipement.",
};

const ITEMS = [
  "Âge minimum : 16 ans (avec autorisation parentale jusqu’à 18 ans)",
  "Poids maximum selon l’équipement et la réglementation du centre",
  "Bonne santé générale — avis médical en cas de doute",
  "Vêtements confortables et chaussures fermées le jour du saut",
  "Ne pas consommer d’alcool ni de substances avant le saut",
  "Suivre à tout moment les consignes du moniteur",
];

export default function ConditionsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="+Info"
        title="Conditions pour réaliser un saut"
        description="Conditions de base pour vivre l’expérience en toute sécurité."
        cta={{ label: "Réserver", href: "/reservation" }}
      />
      <section className="bg-background px-4 py-14 sm:px-6 sm:py-20">
        <ul className="mx-auto max-w-3xl space-y-5">
          {ITEMS.map((item) => (
            <li
              key={item}
              className="border-l-2 border-accent/80 pl-5 text-base leading-relaxed text-white/80 sm:text-lg"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-12 max-w-3xl text-center text-sm text-white/50">
          Tu as une condition médicale particulière ?{" "}
          <Link href="/contact" className="text-accent hover:underline">
            Consulte-nous
          </Link>{" "}
          avant de réserver.
        </p>
      </section>
    </SiteShell>
  );
}
