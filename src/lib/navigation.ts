export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "ACCUEIL", href: "/" },
  { label: "RÉSERVATION", href: "/reservation" },
  {
    label: "BONS CADEAUX",
    href: "/bons-cadeaux",
    children: [
      { label: "Tandem + vidéo 269€", href: "/tarifs" },
      { label: "Vidéo + photos 349€", href: "/tarifs" },
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
  { label: "Bons cadeaux", href: "/bons-cadeaux" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Le centre", href: "/le-centre" },
  { label: "Contact", href: "/contact" },
  { label: "Conditions", href: "/info/conditions" },
  { label: "+Info", href: "/info" },
];
