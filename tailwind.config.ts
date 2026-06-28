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
          DEFAULT: "#0c2643",
          50: "#eef3f8",
          100: "#d7e3ee",
          700: "#16395f",
          800: "#0f2c4d",
          900: "#0c2643",
          950: "#081b30",
        },
        brand: {
          DEFAULT: "#1f5fd6",
          light: "#3b78e8",
          dark: "#1a4fb3",
          50: "#eef4fd",
        },
        accent: {
          green: "#1a8a48",
          greendark: "#15733c",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1.25rem",
        screens: { "2xl": "1240px" },
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
