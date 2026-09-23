import Link from "next/link";

const AUTORIZACIONES = ["ES.SPO.0000", "SPO FR.DEC.0594"] as const;

export default function ExperienceResumen() {
  return (
    <section
      id="centre"
      className="scroll-mt-24 relative overflow-hidden border-t border-white/5 bg-background"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(226,255,0,0.12), transparent 55%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(226,255,0,0.05), transparent 50%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
        <div className="text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent sm:text-sm">
            Sky Emotions
          </p>
          <h2 className="font-display mt-5 text-[clamp(1.6rem,5.5vw,3.4rem)] font-bold uppercase leading-[1.05] tracking-[0.08em] text-white">
            Vis une expérience{" "}
            <span className="text-accent">unique</span>
          </h2>

          <Link
            href="/info/conditions"
            className="font-display group mt-8 inline-flex items-center gap-3 border border-accent/40 bg-accent/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-accent transition-all duration-300 hover:border-accent hover:bg-accent hover:text-black sm:text-sm"
          >
            Conditions pour réaliser un saut
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        <div className="relative mt-16 sm:mt-20">
          <div className="absolute -left-3 top-0 hidden h-full w-px bg-gradient-to-b from-accent via-accent/40 to-transparent sm:block lg:-left-6" />

          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Résumé
          </p>

          <div className="mt-6 space-y-5 text-base font-light leading-relaxed text-white/75 sm:text-lg sm:leading-relaxed">
            <p>
              Le parachutisme en tandem est, sans conteste, la seule façon et
              la plus rapide et simple de s’initier à l’incroyable fascination
              du parachutisme moderne.
            </p>
            <p>
              Attaché de la manière la plus sûre à un moniteur expérimenté,
              toute personne — jeune ou moins jeune — peut faire le premier pas
              vers un sport extraordinaire.
            </p>
            <p>
              Le centre de parachutisme{" "}
              <strong className="font-semibold text-white">SKY EMOTIONS</strong>{" "}
              dispose de toutes les autorisations et licences exigées par
              l’Agencia Estatal de Seguridad Aérea et l’European Aviation Safety
              Agency, enregistré auprès des entités sportives d’Andalousie comme
              Centre Sportif.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-10 sm:mt-16">
          <p className="font-display text-center text-xs font-semibold uppercase tracking-[0.28em] text-muted">
            Autorisations
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {AUTORIZACIONES.map((code) => (
              <div
                key={code}
                className="relative min-w-[11rem] border border-accent/30 bg-black/40 px-6 py-4 text-center backdrop-blur-sm"
              >
                <span
                  className="absolute left-2 top-2 h-1.5 w-1.5 bg-accent"
                  aria-hidden
                />
                <span
                  className="absolute bottom-2 right-2 h-1.5 w-1.5 bg-accent"
                  aria-hidden
                />
                <p className="font-display text-sm font-bold tracking-[0.12em] text-accent sm:text-base">
                  {code}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs leading-relaxed text-white/40 sm:text-sm">
            Agencia Estatal de Seguridad Aérea · European Aviation Safety Agency
          </p>
        </div>
      </div>
    </section>
  );
}
