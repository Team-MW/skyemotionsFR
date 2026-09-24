import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProductCards from "@/components/ProductCards";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Réservation",
  description:
    "Réserve un saut tandem dès 299€ ou vidéo + photos 399€. Ajoute au panier et paie quand tu veux.",
};

const STEPS = [
  {
    n: "01",
    title: "Choisis ton pack",
    text: "Saut tandem (299€), tandem + vidéo + photos (399€), ou saut VIP (999€).",
  },
  {
    n: "02",
    title: "Ajoute au panier",
    text: "Enregistre ta sélection et reviens quand tu veux — le panier est conservé.",
  },
  {
    n: "03",
    title: "Paie avec Stripe",
    text: "Paiement sécurisé. Nous confirmons ensuite la date et la météo avec toi.",
  },
];

export default function ReservationPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Réservation"
        title="Choisis ton expérience"
        description="Deux packs clairs. Ajoute au panier et réserve maintenant ou plus tard."
        cta={{ label: "Voir le panier / payer", href: "/checkout" }}
      />

      <section className="border-b border-white/5 bg-background px-4 py-14 sm:px-6 sm:py-20">
        <ProductCards ids={["saut-tandem-video", "saut-tandem-video-photos", "saut-vip"]} />
      </section>

      <section className="border-b border-white/5 bg-surface px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <article key={step.n} className="border border-white/10 p-6">
              <p className="font-display text-sm font-bold tracking-[0.2em] text-accent">
                {step.n}
              </p>
              <h3 className="font-display mt-3 text-lg font-bold uppercase tracking-wide text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-white/65">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-background px-4 py-12 text-center sm:py-16">
        <p className="text-white/60">
          Des questions ?{" "}
          <Link href="/contact" className="text-accent hover:underline">
            Contacte-nous
          </Link>{" "}
          ou utilise WhatsApp.
        </p>
      </section>
    </SiteShell>
  );
}
