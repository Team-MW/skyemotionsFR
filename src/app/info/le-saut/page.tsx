import type { Metadata } from "next";
import Link from "next/link";
import TandemExperience from "@/components/TandemExperience";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Le saut en tandem",
  description:
    "Comment se déroule un saut en tandem avec Sky Emotions : briefing, vol à 4200 m et chute libre.",
};

export default function LeSautPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="+Info"
        title="Le saut en tandem"
        description="Du briefing à l’atterrissage : on te raconte chaque étape de l’expérience."
        cta={{ label: "Voir les tarifs", href: "/tarifs" }}
      />
      <TandemExperience />
      <div className="border-t border-white/5 bg-nav px-4 py-10 text-center">
        <Link
          href="/reservation"
          className="font-display inline-flex rounded-full bg-accent px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-black hover:bg-accent-hover"
        >
          Je veux sauter
        </Link>
      </div>
    </SiteShell>
  );
}
