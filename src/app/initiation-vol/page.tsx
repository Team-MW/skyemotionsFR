import type { Metadata } from "next";
import InitiationVolSection from "@/components/InitiationVolSection";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Initiation au Vol — Avion Cessna 182 Turbo & Hélicoptère Robinson R22/R44",
  description:
    "Devenez pilote d'un jour ! Initiation au pilotage d'avion Cessna 182 Turbo RG et d'hélicoptère Robinson R22 ou R44 au choix avec un instructeur diplômé.",
};

export default function InitiationVolPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Pilote d'un jour"
        title="Initiation au Vol"
        description="Prenez le manche d'un avion Cessna 182 Turbo RG ou d'un hélicoptère Robinson R22 / R44 avec un instructeur qualifié."
        cta={{ label: "Découvrir les offres", href: "#initiation-vol" }}
      />
      <InitiationVolSection />
    </SiteShell>
  );
}
