import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: {
          50: "#FFFFFF",
          100: "#FAF9F6",
          200: "#F5F5F2",
          300: "#EFEFEA",
          400: "#E5E5E0",
          500: "#D4D4CE",
        },
        carbon: {
          950: "#0D0D0F",
          900: "#141416",
          800: "#1F1F24",
          700: "#2B2B33",
          600: "#44444F",
          500: "#6B6B78",
          400: "#8E8E9C",
          300: "#B8B8C4",
        },
        brand: {
          red: "#E52323",
          redDark: "#B81414",
          redLight: "#FFF1F1",
          redGlow: "rgba(229, 35, 35, 0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["var(--font-outfit)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wide: "0.08em",
        wider: "0.15em",
        widest: "0.25em",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)",
        card: "0 4px 20px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
        cardHover: "0 12px 32px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
