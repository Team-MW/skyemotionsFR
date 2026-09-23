import Image from "next/image";
import Link from "next/link";

const EXPERIENCES = [
  {
    id: "vip-helicoptere",
    title: "Saut VIP + Hélicoptère",
    subtitle: "Tandem + balade touristique en hélicoptère + hôtel",
    image: "/images/helicopter-vip-1.png",
    imageAlt: "Hélicoptère R44 Raven II pour expérience VIP",
    href: "/contact",
    cta: "Demander",
  },
  {
    id: "imax-360",
    title: "Saut tandem IMAX 360º",
    subtitle: "Vidéo immersive 360º de ton saut",
    image: "/images/salto-tandem-imax360-2.png",
    imageAlt: "Saut tandem en chute libre avec le soleil en fond",
    href: "/contact",
    cta: "Demander",
  },
  {
    id: "video-4k",
    title: "Saut tandem vidéo 4K",
    subtitle: "Enregistrement professionnel en qualité 4K",
    image: "/images/salto-tandem-video4k-3.png",
    imageAlt: "Passagère souriant en chute libre tandem",
    href: "/reservation",
    cta: "Réserver",
  },
  {
    id: "saut-tandem",
    title: "Saut tandem",
    subtitle: "L’expérience essentielle dès 269€",
    image: "/images/salto-tandem2.png",
    imageAlt: "Sortie de l’avion en saut tandem",
    href: "/reservation",
    cta: "Réserver",
  },
] as const;

export default function ExperienceImageBlocks() {
  return (
    <div className="mx-auto grid max-w-[1200px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {EXPERIENCES.map((item) => (
        <article
          key={item.id}
          className="group flex flex-col overflow-hidden bg-[#2a2a2a]"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="flex flex-1 flex-col px-4 py-5 text-center sm:px-5">
            <h3 className="font-display text-[0.95rem] font-bold uppercase leading-snug tracking-[0.04em] text-accent sm:text-base">
              {item.title}
            </h3>
            <p className="mt-2 flex-1 text-sm font-light text-white/70">
              {item.subtitle}
            </p>
            <Link
              href={item.href}
              className="font-display mt-5 block w-full rounded-lg bg-accent py-3 text-center text-xs font-bold uppercase tracking-[0.1em] text-black transition hover:bg-accent-hover"
            >
              {item.cta}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
