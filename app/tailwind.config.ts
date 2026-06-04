import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
      },
      colors: {
        brand: {
          DEFAULT: "#6C63FF",
          light: "#A29BFE",
          dark: "#4834D4",
        },
      },
    },
  },
  plugins: [],
};
export default config;