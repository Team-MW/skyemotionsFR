export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "ACCUEIL", href: "/" },
  { label: "RÉSERVATION", href: "/reservation" },
  { label: "INITIATION AU VOL", href: "/initiation-vol" },
  {
    label: "BONS CADEAUX",
    href: "/bons-cadeaux",
    children: [
      { label: "Formule Découverte 299€", href: "/tarifs" },
      { label: "Formule Souvenir 399€", href: "/tarifs" },
      { label: "Expérience VIP 999€", href: "/tarifs" },
      { label: "Initiation Avion Cessna 390€", href: "/initiation-vol" },
      { label: "Initiation Hélico R22/R44", href: "/initiation-vol" },
    ],
  },
  { label: "TARIFS", href: "/tarifs" },
  { label: "LE CENTRE", href: "/le-centre" },
  { label: "CONTACT", href: "/contact" },
  {
    label: "+INFO",
    href: "/info",
    children: [
      { label: "Conditions", href: "/info/conditions" },
      { label: "Le saut", href: "/info/le-saut" },
      { label: "FAQ", href: "/info/faq" },
      { label: "Avis", href: "/#avis" },
    ],
  },
];

export const FOOTER_LINKS = [
  { label: "Réservation", href: "/reservation" },
  { label: "Initiation au vol", href: "/initiation-vol" },
  { label: "Bons cadeaux", href: "/bons-cadeaux" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Le centre", href: "/le-centre" },
  { label: "Contact", href: "/contact" },
  { label: "Conditions", href: "/info/conditions" },
  { label: "+Info", href: "/info" },
];
