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
          DEFAULT: "#dac176", // logo gold — fills, paired with navy text
          dark: "#b8924a", // deeper gold — fill hover (navy text stays readable)
          ink: "#8a6b22", // deep gold — accent TEXT on light backgrounds
          light: "#e4ce8e", // bright gold — accents on dark/navy backgrounds
          50: "#faf4e4", // soft gold tint
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
