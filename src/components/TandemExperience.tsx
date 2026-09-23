import Image from "next/image";

const STEPS = [
  {
    id: "briefing",
    number: "01",
    title: "Briefing",
    image: "/images/salto-sonrisa.jpg",
    imageAlt: "Sauteurs en tandem souriant pendant la chute libre",
    reverse: false,
    paragraphs: [
      "À ton arrivée au centre, tu seras accueilli par notre équipe sympathique dans nos bureaux pour t’inscrire. L’équipe de parachutistes et ton moniteur te donneront environ 20 minutes de briefing essentiel et simple, en t’expliquant tous les aspects du saut, les notions de sécurité et toutes les étapes de ton expérience.",
      "Ensuite, on enfile la combinaison, les harnais, et avec ton moniteur vous embarquez dans l’avion.",
    ],
  },
  {
    id: "vol",
    number: "02",
    title: "Vol",
    image: "/images/vuelo-avion.jpg",
    imageAlt: "Avion jaune décollant vers la zone de saut",
    reverse: true,
    paragraphs: [
      "Tu monteras et voleras dans notre avion environ 20 minutes jusqu’à atteindre l’altitude du saut : 4200 mètres. Pendant ce temps, tu profiteras des vues : les plages de sable blanc de l’océan Atlantique, la côte du Maroc, le Rocher de Gibraltar, la sierra de Santa Lucía et derrière la Sierra Nevada.",
    ],
  },
  {
    id: "saut",
    number: "03",
    title: "Saut",
    image: "/images/salto-freefall.jpg",
    imageAlt: "Chute libre en tandem vue depuis le ciel",
    reverse: false,
    paragraphs: [
      "Équipé et prêt, attaché à ton moniteur dans l’avion, avec les dernières consignes, vous êtes prêts à quitter l’avion et vivre une chute libre de près de 60 secondes — comme un faucon en chasse — à près de 200 km/h.",
      "Ensuite le parachute s’ouvre pour voler environ 6 à 8 minutes en profitant du paysage impressionnant.",
    ],
  },
] as const;

export default function TandemExperience() {
  return (
    <section
      id="resume"
      className="scroll-mt-24 border-t border-white/5 bg-background"
    >
      <div className="px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20 lg:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-accent sm:text-sm">
            L’expérience
          </p>
          <h2 className="font-display mt-4 text-[clamp(1.4rem,4.5vw,2.75rem)] font-bold uppercase leading-[1.15] tracking-[0.06em] text-white">
            En quoi consiste le saut tandem ?
          </h2>
          <p className="font-display mt-6 text-xl font-bold uppercase tracking-[0.04em] text-accent sm:text-2xl md:text-3xl">
            Une sensation extraordinaire !
          </p>
          <p className="font-display mt-3 text-lg font-semibold uppercase tracking-[0.08em] text-white sm:text-xl">
            Félicitations !
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-relaxed text-white/70 sm:text-base md:text-lg">
            Tu as décidé de vivre ce qui sera probablement l’émotion de ta vie !
          </p>
        </div>
      </div>

      <div className="space-y-0">
        {STEPS.map((step) => (
          <article
            key={step.id}
            id={step.id}
            className="border-t border-white/5"
          >
            <div className="mx-auto grid max-w-[1200px] items-center gap-0 lg:grid-cols-2">
              <div
                className={`relative aspect-[4/3] w-full overflow-hidden bg-surface lg:aspect-auto lg:min-h-[420px] ${
                  step.reverse ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/20"
                  aria-hidden
                />
              </div>

              <div
                className={`px-5 py-10 sm:px-8 sm:py-14 lg:px-12 xl:px-16 ${
                  step.reverse ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-sm font-bold tracking-[0.2em] text-accent">
                    {step.number}
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-[0.14em] text-white sm:text-3xl">
                    {step.title}
                  </h3>
                </div>
                <div className="mt-6 space-y-4">
                  {step.paragraphs.map((p) => (
                    <p
                      key={p.slice(0, 40)}
                      className="text-sm font-light leading-relaxed text-white/75 sm:text-base md:text-[1.05rem] md:leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
