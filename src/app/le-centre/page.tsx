import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Le centre",
  description:
    "Découvre le centre de parachutisme Sky Emotions en Andalousie. Autorisé AESA et EASA. ES.SPO.0000 · SPO FR.DEC.0594.",
};

const HIGHLIGHTS = [
  {
    title: "La sécurité d’abord",
    text: "Moniteurs expérimentés, matériel contrôlé et procédures sous réglementation européenne.",
  },
  {
    title: "Emplacement privilégié",
    text: "Vues sur l’Atlantique, la côte du Maroc, Gibraltar et les sierras andalouses depuis 4200 m.",
  },
  {
    title: "Ambiance conviviale",
    text: "Une équipe humaine qui t’accompagne de l’arrivée à l’atterrissage avec le sourire.",
  },
];

export default function LeCentrePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Sky Emotions"
        title="Le centre"
        description="Centre sportif de parachutisme avec toutes les autorisations exigées. Un lieu pensé pour vivre le ciel en toute confiance."
        cta={{ label: "Réserver visite / saut", href: "/reservation" }}
      />

      <section className="bg-background px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
            <Image
              src="/images/vuelo-avion.jpg"
              alt="Avion du centre Sky Emotions"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-[0.1em] text-accent">
              Qui sommes-nous
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-white/70">
              Le centre de parachutisme{" "}
              <strong className="font-semibold text-white">SKY EMOTIONS</strong>{" "}
              dispose de toutes les autorisations et licences de l’Agencia
              Estatal de Seguridad Aérea et de l’European Aviation Safety
              Agency. Nous sommes enregistrés auprès des entités sportives
              d’Andalousie comme Centre Sportif.
            </p>
            <p className="mt-4 text-base font-light leading-relaxed text-white/70">
              Ici tu ne fais pas que sauter : tu vis une expérience complète,
              sûre et intense, avec une équipe qui connaît chaque détail de la
              chute libre.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {["ES.SPO.0000", "SPO FR.DEC.0594"].map((code) => (
                <div
                  key={code}
                  className="border border-accent/40 bg-black/40 px-5 py-3"
                >
                  <p className="font-display text-sm font-bold tracking-[0.12em] text-accent">
                    {code}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-surface px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((h) => (
            <article key={h.title} className="border border-white/10 p-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                {h.title}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-white/65">
                {h.text}
              </p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-[1100px] text-center">
          <Link
            href="/contact"
            className="font-display inline-flex border border-accent px-7 py-3 text-sm font-bold uppercase tracking-wide text-accent transition hover:bg-accent hover:text-black"
          >
            Comment venir / contact
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
