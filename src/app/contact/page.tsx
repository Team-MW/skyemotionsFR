import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacte Sky Emotions pour une réservation, un bon cadeau ou des infos sur le saut en tandem.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Parlons"
        title="Contact"
        description="Des questions, une réservation ou un cadeau ? Écris-nous. On répond dès que possible."
      />

      <section className="bg-background px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[1fr_1.1fr]">
          <aside className="space-y-8">
            <div>
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">
                E-mail
              </h2>
              <a
                href="mailto:info@skyemotions.fr"
                className="mt-2 block text-lg text-white transition hover:text-accent"
              >
                info@skyemotions.fr
              </a>
            </div>
            <div>
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">
                WhatsApp
              </h2>
              <p className="mt-2 text-white/70">
                Utilise le bouton vert flottant ou{" "}
                <Link href="/reservation" className="text-accent hover:underline">
                  demande une réservation
                </Link>
                .
              </p>
            </div>
            <div>
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">
                Centre
              </h2>
              <p className="mt-2 text-white/70">
                Andalousie, Espagne · Centre sportif autorisé AESA / EASA
              </p>
              <Link
                href="/le-centre"
                className="mt-2 inline-block text-sm text-accent hover:underline"
              >
                En savoir plus sur le centre →
              </Link>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>
    </SiteShell>
  );
}
