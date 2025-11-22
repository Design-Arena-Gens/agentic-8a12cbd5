import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      backgroundImage: {
        "ancient-pattern": "radial-gradient(circle at 20% 20%, rgba(254, 243, 199, 0.4), transparent 40%), radial-gradient(circle at 80% 0%, rgba(199, 210, 254, 0.35), transparent 45%)"
      },
      colors: {
        sand: {
          50: "#fdf8f3",
          100: "#f8eddb",
          200: "#f0dcc0",
          300: "#e3c79f",
          400: "#cfa06f",
          500: "#b88047",
          600: "#9c5f31",
          700: "#7c4725",
          800: "#5c341c",
          900: "#402313"
        }
      }
    }
  },
  plugins: []
};

export default config;
