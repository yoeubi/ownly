import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        accent: {
          DEFAULT: "#E85D75",
          hover: "#D64D65",
        },
        "bg-warm": "#FDF8F3",
        "bg-section": "#F5EDE6",
        gray: {
          200: "#E5E5E5",
          400: "#9E9E9E",
          600: "#6B6B6B",
          900: "#1A1A1A",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
