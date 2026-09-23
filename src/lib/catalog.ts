export type CatalogProduct = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  features: string[];
  /** Price in EUR cents (Stripe-compatible) */
  priceCents: number;
  image: string;
  featured?: boolean;
  /** Optional Stripe Price ID when configured */
  stripePriceId?: string;
};

/** Tarifs officiels Sky Emotions */
export const CATALOG: CatalogProduct[] = [
  {
    id: "saut-tandem-video",
    name: "Saut tandem vidéo",
    shortName: "Tandem + vidéo",
    description: "Saut tandem + Vidéo",
    features: [
      "Briefing théorique avant le saut",
      "20 minutes de vol dans notre avion",
      "Environ 60 secondes de chute libre",
      "Environ 8 minutes de vol sous voile",
      "Diplôme attestant de l’activité",
    ],
    priceCents: 26900,
    image: "/images/salto-freefall.jpg",
    featured: true,
  },
  {
    id: "saut-tandem-video-photos",
    name: "Saut tandem vidéo + photos",
    shortName: "Tandem + vidéo + photos",
    description: "Saut tandem + Vidéo + Photos",
    features: [
      "Briefing théorique avant le saut",
      "Vidéo du saut, filmée par ton moniteur en GoPro, qualité FHD",
      "Photos de l’activité",
    ],
    priceCents: 34900,
    image: "/images/salto-freefall.jpg",
  },
];

export function formatEUR(cents: number) {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

export function getProduct(id: string) {
  return CATALOG.find((p) => p.id === id);
}
