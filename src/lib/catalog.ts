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
    name: "Formule Découverte — Saut en tandem",
    shortName: "Saut en Tandem (299€)",
    description: "Saut en tandem, briefing & équipement complet (Escale à 4000m)",
    features: [
      "Briefing théorique avant le saut",
      "20 minutes de vol dans notre avion jusqu'à 4000m",
      "Environ 60 secondes de chute libre à 200 km/h",
      "5 à 7 minutes de vol sous voile",
      "Diplôme attestant de l’activité",
    ],
    priceCents: 29900,
    image: "/images/salto-freefall.jpg",
    featured: true,
  },
  {
    id: "saut-tandem-video-photos",
    name: "Formule Souvenir — Saut tandem vidéo + photos",
    shortName: "Tandem + vidéo + photos (399€)",
    description: "Saut tandem + Vidéo & Photos HD",
    features: [
      "Briefing théorique avant le saut",
      "Vidéo du saut filmée en HD + Photos HD de toute votre aventure",
      "Chute libre de 60 secondes à 4000m",
      "5 à 7 minutes de vol sous voile",
      "Diplôme attestant de l’activité",
    ],
    priceCents: 39900,
    image: "/images/salto-freefall.jpg",
    featured: true,
  },
  {
    id: "saut-vip",
    name: "Saut VIP — Transfert Hélicoptère / Avion",
    shortName: "Saut VIP (999€)",
    description: "Départ Paris/Versailles — transfert hélicoptère ou avion avec initiation au vol, puis saut tandem à Saint-André-de-l'Eure",
    features: [
      "Départ Paris / aéroport de Versailles",
      "Transfert en hélicoptère ou avion avec initiation au vol",
      "Saut tandem à Saint-André-de-l'Eure (LFFD)",
      "Vidéo HD & photos HD incluses",
      "Prise en charge personnalisée VIP",
    ],
    priceCents: 99900,
    image: "/images/helicopter-vip-1.png",
  },
  {
    id: "initiation-avion-cessna-182",
    name: "Initiation Pilotage Avion — Cessna 182 Turbo RG",
    shortName: "Initiation Avion Cessna 182",
    description: "Prenez les commandes d'un avion haute performance Cessna 182 Turbo avec train rentrant (RG)",
    features: [
      "Briefing théorique au sol (mécanique de vol & sécurité)",
      "Visite pré-vol détaillée de l'appareil",
      "Décollage & prise des commandes en vol guidée",
      "Exercices de pilotage (virages, paliers, variations d'altitude)",
      "Avion Cessna 182 Turbo RG (train rentrant, pas variable)",
      "Instructeur diplômé d'État FI (Flight Instructor)",
      "Remise du diplôme de premier vol de pilotage",
    ],
    priceCents: 39000,
    image: "/images/cessna-182-turbo.jpg",
    featured: true,
  },
  {
    id: "initiation-helico-robinson-r22",
    name: "Initiation Pilotage Hélicoptère — Robinson R22",
    shortName: "Initiation Hélico R22",
    description: "Expérience intense de vol stationnaire sur hélicoptère biplace ultra-réactif",
    features: [
      "Briefing théorique complet sur le vol hélicoptère",
      "Explication des 3 commandes (cyclique, collectif, palonnier)",
      "Prise des commandes en vol avec l'instructeur",
      "Sensations pures du vol stationnaire et de la maniabilité",
      "Instructeur hélicoptère professionnel dédié",
      "Diplôme d'initiation au pilotage hélicoptère",
    ],
    priceCents: 42000,
    image: "/images/robinson-r22-r44.jpg",
  },
  {
    id: "initiation-helico-robinson-r44",
    name: "Initiation Pilotage Hélicoptère — Robinson R44",
    shortName: "Initiation Hélico R44",
    description: "Vol d'initiation au pilotage sur hélicoptère quadriplace Robinson R44 Raven II",
    features: [
      "Briefing théorique & préparation de la mission de vol",
      "Prise des commandes en vol en double commande",
      "Hélicoptère quadriplace puissant avec vue panoramique à 360°",
      "Possibilité d'embarquer des accompagnateurs",
      "Initiation aux manœuvres de vol stationnaire et croisière",
      "Remise du diplôme officiel de vol d'initiation",
    ],
    priceCents: 59000,
    image: "/images/robinson-r22-r44.jpg",
    featured: true,
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
