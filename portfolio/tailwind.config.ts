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
        bg: "#08080f",
        bg2: "#0e0e1a",
        surface: "#12121f",
        accent: "#7c6aff",
        accent2: "#00e5c8",
        "text-muted": "#7a7891",
        "text-dim": "#4a4866",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        scanline: "scanline 2s linear infinite",
        "map-pulse": "mapPulse 2s ease-out infinite",
      },
      keyframes: {
        scanline: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
        mapPulse: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
