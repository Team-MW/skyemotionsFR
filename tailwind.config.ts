import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        muted: "var(--muted)",
        surface: "var(--surface)",
        nav: "var(--nav)",
      },
      fontFamily: {
        sans: ["var(--font-outfit)"],
        display: ["var(--font-barlow)"],
      },
    },
  },
  plugins: [],
};
export default config;
