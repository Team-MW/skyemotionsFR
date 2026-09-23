import type { Metadata } from "next";
import Link from "next/link";
import PostPaymentBookingForm from "@/components/PostPaymentBookingForm";
import SiteShell from "@/components/SiteShell";
import { getPaidPaiementSession, getStripe } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Finaliser la réservation",
  description: "Formulaire de données après le paiement de ton saut Sky Emotions.",
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<{ session_id?: string }>;
};

function AccessDenied({ reason }: { reason: string }) {
  return (
    <SiteShell>
      <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
        <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-red-300">
          Accès restreint
        </p>
        <h1 className="font-display mt-4 text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
          Formulaire indisponible
        </h1>
        <p className="mt-4 max-w-md text-white/65">{reason}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/checkout"
            className="font-display inline-flex bg-accent px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-black hover:bg-accent-hover"
          >
            Aller au paiement
          </Link>
          <Link
            href="/contact"
            className="font-display inline-flex border border-white/25 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:border-accent hover:text-accent"
          >
            Contact
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

export default async function PaiementSuccessPage({ searchParams }: Props) {
  const { session_id: sessionId } = await searchParams;

  if (!getStripe()) {
    return (
      <AccessDenied reason="Le paiement n’est pas encore configuré sur le serveur (STRIPE_SECRET_KEY manquante)." />
    );
  }

  if (!sessionId) {
    return (
      <AccessDenied reason="Ce formulaire n’est accessible qu’après un paiement réussi avec Stripe." />
    );
  }

  const session = await getPaidPaiementSession(sessionId);

  if (!session) {
    return (
      <AccessDenied reason="Nous n’avons pas trouvé de paiement valide pour ce lien. Si tu viens de payer, attends quelques secondes ou contacte-nous." />
    );
  }

  return (
    <SiteShell>
      <section className="bg-background px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Dernière étape
          </p>
          <h1 className="font-display mt-3 text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Données du saut
          </h1>
          <p className="mt-3 text-white/60">
            Ton paiement est confirmé. Complète le formulaire pour que nous organisons
            ton expérience.
          </p>
        </div>
        <PostPaymentBookingForm session={session} />
      </section>
    </SiteShell>
  );
}
