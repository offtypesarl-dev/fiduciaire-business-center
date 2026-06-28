import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a2540",
          50: "#eef2f7",
          100: "#d6e0eb",
          700: "#13314f",
          800: "#0f2a43",
          900: "#0a2540",
          950: "#061829",
        },
        gold: {
          DEFAULT: "#c8a45c",
          light: "#dcc089",
          dark: "#a8853f",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      container: {
        center: true,
        padding: "1.25rem",
        screens: { "2xl": "1200px" },
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
