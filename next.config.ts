import type { NextConfig } from "next";

const ONE_YEAR = "public, max-age=31536000, immutable";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  images: {
    // AVIF en premier (le plus léger), WebP en repli
    formats: ["image/avif", "image/webp"],
    // Les images optimisées restent en cache 1 an (évite de les régénérer)
    minimumCacheTTL: 60 * 60 * 24 * 365,
    deviceSizes: [360, 640, 828, 1080, 1280, 1600],
    imageSizes: [64, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/:path*\\.(png|jpg|jpeg|webp|avif|svg|ico|mp4|webm|woff2)",
        headers: [{ key: "Cache-Control", value: ONE_YEAR }],
      },
    ];
  },
};

export default nextConfig;
