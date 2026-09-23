import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.skyemotions.fr";

const routes = [
  "",
  "/reservation",
  "/checkout",
  "/bons-cadeaux",
  "/tarifs",
  "/le-centre",
  "/contact",
  "/info",
  "/info/conditions",
  "/info/le-saut",
  "/info/faq",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path, i) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : Math.max(0.5, 0.9 - i * 0.03),
  }));
}
