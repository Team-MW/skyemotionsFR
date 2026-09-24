"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { getProduct, formatEUR } from "@/lib/catalog";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.2 7.2a1 1 0 0 1-1.4 0L3.3 9.1a1 1 0 1 1 1.4-1.4l4.1 4.1 6.5-6.5a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function InitiationVolSection() {
  const { addItem } = useCart();
  const [helicoChoice, setHelicoChoice] = useState<"r22" | "r44">("r22");

  const cessnaProduct = getProduct("initiation-avion-cessna-182");
  const r22Product = getProduct("initiation-helico-robinson-r22");
  const r44Product = getProduct("initiation-helico-robinson-r44");

  const selectedHelicoProduct = helicoChoice === "r22" ? r22Product : r44Product;

  return (
    <section
      id="initiation-vol"
      className="scroll-mt-20 border-t border-white/10 bg-background py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-display inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Pilote d'un jour
          </span>
          <h2 className="font-display mt-4 text-[clamp(1.75rem,4vw,3.25rem)] font-extrabold uppercase leading-[1.1] tracking-[0.04em] text-white">
            Initiation au Vol d'Avion & Hélicoptère
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-white/75 sm:text-lg">
            Prenez les commandes de nos aéronefs sous le contrôle d'instructeurs professionnels certifiés. Briefing théorique, préparation du vol et prise en main réelle des commandes en plein ciel !
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* SECTION AVION: Cessna 182 Turbo RG */}
          <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#222222] shadow-2xl transition-all duration-300 hover:border-accent/40">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
              <Image
                src="/images/cessna-182-turbo.jpg"
                alt="Avion Cessna 182 Turbo RG - Initiation au pilotage"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222222] via-black/20 to-transparent" />
              
              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <span className="font-display rounded-md bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
                  Avion Cessna 182 Turbo RG
                </span>
                <span className="rounded-md bg-black/70 backdrop-blur-md px-2.5 py-1 text-xs font-medium text-white">
                  Train Rentrant (RG)
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-4">
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                  Cessna 182 Turbo RG
                </h3>
                <span className="font-display text-3xl font-extrabold tracking-tight text-accent">
                  {cessnaProduct ? formatEUR(cessnaProduct.priceCents) : "390 €"}
                </span>
              </div>

              <p className="mt-4 text-sm font-light leading-relaxed text-white/80 sm:text-base">
                Montez à bord du mythique Cessna 182 Turbo RG, un avion de tourisme haute performance doté d'un moteur turbocompressé et d'un train rentrant. Après un briefing théorique complet, vous prendrez directement le manche en vol avec votre instructeur !
              </p>

              <div className="mt-6 flex-1">
                <h4 className="font-display text-xs font-bold uppercase tracking-[0.15em] text-accent">
                  Ce qui est inclus dans votre initiation :
                </h4>
                <ul className="mt-3.5 space-y-2.5">
                  <li className="flex gap-3 text-sm text-white/90">
                    <CheckIcon />
                    <span>Briefing théorique au sol & inspection pré-vol</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90">
                    <CheckIcon />
                    <span>Vol d'initiation avec prise en main réelle des commandes</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90">
                    <CheckIcon />
                    <span>Exercices pratiques de pilotage (assiette, virages, paliers)</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90">
                    <CheckIcon />
                    <span>Performances Turbo & train d'atterrissage escamotable</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90">
                    <CheckIcon />
                    <span>Instructeur diplômé d'État FI (Flight Instructor)</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90">
                    <CheckIcon />
                    <span>Remise du diplôme de premier vol de pilotage</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                {cessnaProduct && (
                  <button
                    type="button"
                    onClick={() => addItem(cessnaProduct.id)}
                    className="font-display w-full rounded-xl bg-accent py-4 text-center text-sm font-bold uppercase tracking-[0.1em] text-black transition-all hover:bg-accent-hover hover:shadow-lg active:scale-[0.99]"
                  >
                    Réserver l'Initiation Avion ({formatEUR(cessnaProduct.priceCents)})
                  </button>
                )}
              </div>
            </div>
          </article>

          {/* SECTION HÉLICOPTÈRE: Robinson R22 ou R44 */}
          <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#222222] shadow-2xl transition-all duration-300 hover:border-accent/40">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
              <Image
                src="/images/robinson-r22-r44.jpg"
                alt="Hélicoptère Robinson R22 R44 - Initiation au pilotage"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222222] via-black/20 to-transparent" />

              <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                <span className="font-display rounded-md bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
                  Initiation Hélicoptère
                </span>
                <span className="rounded-md bg-black/70 backdrop-blur-md px-2.5 py-1 text-xs font-medium text-white">
                  Au choix : R22 ou R44
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              {/* Helico selector tabs */}
              <div className="mb-4 flex rounded-lg bg-black/40 p-1 border border-white/10">
                <button
                  type="button"
                  onClick={() => setHelicoChoice("r22")}
                  className={`flex-1 rounded-md py-2 text-center text-xs sm:text-sm font-bold uppercase transition-all ${
                    helicoChoice === "r22"
                      ? "bg-accent text-black shadow"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Robinson R22 (Biplace)
                </button>
                <button
                  type="button"
                  onClick={() => setHelicoChoice("r44")}
                  className={`flex-1 rounded-md py-2 text-center text-xs sm:text-sm font-bold uppercase transition-all ${
                    helicoChoice === "r44"
                      ? "bg-accent text-black shadow"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Robinson R44 (Quadriplace)
                </button>
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-4">
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                  {helicoChoice === "r22" ? "Robinson R22 Biplace" : "Robinson R44 Quadriplace"}
                </h3>
                <span className="font-display text-3xl font-extrabold tracking-tight text-accent">
                  {selectedHelicoProduct ? formatEUR(selectedHelicoProduct.priceCents) : "420 €"}
                </span>
              </div>

              <p className="mt-4 text-sm font-light leading-relaxed text-white/80 sm:text-base">
                {helicoChoice === "r22" ? (
                  <>
                    Le <strong>Robinson R22</strong> est l'hélicoptère école par excellence : ultra-agile, réactif et précis. Découvrez le vol stationnaire, la gestion du pas collectif et du manche cyclique pour des sensations de pilotage pures.
                  </>
                ) : (
                  <>
                    Le <strong>Robinson R44 Raven II</strong> offre une cabine spacieuse 4 places avec vision panoramique à 360°, idéal pour un vol d'initiation dans un confort supérieur avec un moteur puissant de 245 CV.
                  </>
                )}
              </p>

              <div className="mt-6 flex-1">
                <h4 className="font-display text-xs font-bold uppercase tracking-[0.15em] text-accent">
                  Points forts de la formule {helicoChoice === "r22" ? "R22" : "R44"} :
                </h4>
                <ul className="mt-3.5 space-y-2.5">
                  <li className="flex gap-3 text-sm text-white/90">
                    <CheckIcon />
                    <span>Briefing théorique complet sur les 3 commandes du rotor</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90">
                    <CheckIcon />
                    <span>Décollage vertical & contrôle du vol stationnaire</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90">
                    <CheckIcon />
                    <span>Prise en main guidée par un instructeur hélicoptère chevronné</span>
                  </li>
                  {helicoChoice === "r22" ? (
                    <li className="flex gap-3 text-sm text-white/90">
                      <CheckIcon />
                      <span>Hélicoptère biplace ultra-réactif pour sensations pures</span>
                    </li>
                  ) : (
                    <li className="flex gap-3 text-sm text-white/90">
                      <CheckIcon />
                      <span>Cabine quadriplace & vue panoramique spectaculaire</span>
                    </li>
                  )}
                  <li className="flex gap-3 text-sm text-white/90">
                    <CheckIcon />
                    <span>Attestation et diplôme officiel d'initiation au pilotage</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                {selectedHelicoProduct && (
                  <button
                    type="button"
                    onClick={() => addItem(selectedHelicoProduct.id)}
                    className="font-display w-full rounded-xl bg-accent py-4 text-center text-sm font-bold uppercase tracking-[0.1em] text-black transition-all hover:bg-accent-hover hover:shadow-lg active:scale-[0.99]"
                  >
                    Réserver l'Hélicoptère {helicoChoice === "r22" ? "R22" : "R44"} ({formatEUR(selectedHelicoProduct.priceCents)})
                  </button>
                )}
              </div>
            </div>
          </article>
        </div>

        {/* Footer info box */}
        <div className="mt-12 rounded-xl border border-white/10 bg-[#1e1e1e] p-6 text-center sm:p-8">
          <p className="text-sm text-white/70 sm:text-base">
            Vous souhaitez organiser un vol personnalisé ou vous avez des questions sur la formation et les licences de pilote ?{" "}
            <Link href="/contact" className="font-semibold text-accent hover:underline">
              Contactez notre équipe d'instructeurs
            </Link>{" "}
            dès aujourd'hui.
          </p>
        </div>
      </div>
    </section>
  );
}
