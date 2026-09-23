import type { Metadata } from "next";
import { Barlow_Condensed, Outfit } from "next/font/google";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.skyemotions.fr";

const siteTitle = "Sky Emotions | Parachutisme en Tandem — Skydive & More";
const siteDescription =
  "Sautez en tandem avec Sky Emotions : chute libre à 4200 m, moniteurs certifiés AESA/EASA et une expérience inoubliable. Réservez votre saut en Andalousie.";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Sky Emotions",
  },
  description: siteDescription,
  applicationName: "Sky Emotions",
  keywords: [
    "parachutisme",
    "saut tandem",
    "skydiving",
    "Sky Emotions",
    "chute libre",
    "parachute Andalousie",
    "cadeau expérience",
    "AESA",
    "EASA",
    "skydive Espagne",
  ],
  authors: [{ name: "Sky Emotions" }],
  creator: "Microdidact",
  publisher: "Sky Emotions",
  category: "sports",
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Sky Emotions",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/icons/icon-512.png",
        width: 512,
        height: 512,
        alt: "Sky Emotions — logo",
      },
      {
        url: "/images/hero-poster.jpg",
        width: 1280,
        height: 720,
        alt: "Saut en tandem Sky Emotions — chute libre",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: ["/icons/icon-512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/icons/icon-192.png"],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/icons/apple-touch-icon.png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "Sky Emotions",
    statusBarStyle: "black-translucent",
  },
  other: {
    "geo.region": "ES-AN",
    "msapplication-TileColor": "#0e0e0e",
    "msapplication-TileImage": "/icons/icon-192.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Sky Emotions",
  description: siteDescription,
  url: siteUrl,
  image: `${siteUrl}/icons/icon-512.png`,
  logo: `${siteUrl}/icons/icon-512.png`,
  slogan: "skydive & more",
  email: "info@skyemotions.fr",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Andalousie",
    addressCountry: "ES",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Andalousie",
  },
  priceRange: "€€",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <CartProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
          <WhatsAppFloat />
        </CartProvider>
      </body>
    </html>
  );
}
