import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Questions fréquentes sur le saut en tandem avec Sky Emotions.",
};

const FAQ = [
  {
    q: "Que se passe-t-il s’il fait mauvais temps ?",
    a: "La sécurité prime. Si les conditions ne permettent pas de sauter, nous reprogrammons ton expérience sans frais supplémentaires selon les disponibilités.",
  },
  {
    q: "Faut-il savoir faire du parachute ?",
    a: "Non. Tu es attaché à un moniteur expérimenté. Tu as seulement besoin du briefing court le jour du saut.",
  },
  {
    q: "Puis-je offrir un saut ?",
    a: "Oui. Nous avons des bons cadeaux tandem, packs avec vidéo et formules flexibles.",
  },
  {
    q: "Combien dure toute l’expérience ?",
    a: "Compte plusieurs heures au centre (briefing, attente du créneau, vol et saut). La chute libre elle-même dure près d’une minute.",
  },
  {
    q: "Êtes-vous autorisés ?",
    a: "Oui. Nous opérons sous autorisations AESA / EASA (ES.SPO.0000 · SPO FR.DEC.0594) et comme centre sportif en Andalousie.",
  },
];

export default function FaqPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="+Info"
        title="Questions fréquentes"
        description="Réponses rapides. Si tu ne trouves pas la tienne, écris-nous."
        cta={{ label: "Contact", href: "/contact" }}
      />
      <section className="bg-background px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-4">
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="group border border-white/10 bg-surface open:border-accent/40"
            >
              <summary className="font-display cursor-pointer list-none px-5 py-4 text-sm font-bold uppercase tracking-wide text-white marker:content-none sm:text-base [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-accent transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-white/5 px-5 py-4 text-sm font-light leading-relaxed text-white/70 sm:text-base">
                {item.a}
              </p>
            </details>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-white/50">
          Plus de détails sur le saut dans{" "}
          <Link href="/info/le-saut" className="text-accent hover:underline">
            Le saut
          </Link>
          .
        </p>
      </section>
    </SiteShell>
  );
}
