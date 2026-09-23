export default function Requisitos() {
  const items = [
    "Âge minimum : 16 ans (avec autorisation parentale jusqu’à 18 ans)",
    "Poids maximum selon l’équipement et la réglementation du centre",
    "Bonne santé générale — avis médical en cas de doute",
    "Vêtements confortables et chaussures fermées le jour du saut",
  ];

  return (
    <section
      id="conditions"
      className="scroll-mt-24 border-t border-white/5 bg-surface px-4 py-14 sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-center text-xl font-bold uppercase tracking-[0.12em] text-accent sm:text-2xl sm:tracking-[0.18em] md:text-3xl">
          Conditions pour réaliser un saut
        </h2>
        <ul className="mt-8 space-y-4 sm:mt-12 sm:space-y-5">
          {items.map((item) => (
            <li
              key={item}
              className="border-l-2 border-accent/80 pl-4 text-sm leading-relaxed text-white/80 sm:pl-5 sm:text-base md:text-lg"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
