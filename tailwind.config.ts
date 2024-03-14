import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "about-bg-image": "url('/images/clouds.jpg')",
        "body-bg-image": "url('/dot.svg')",
      },
      colors: {
        "text-base-color": "rgb(var(--color-text-base-color) / <alpha-value>)",
        "border-base-color":
          "rgb(var(--color-border-base-color) / <alpha-value>)",
        "base-1": "rgb(var(--color-base-1) / <alpha-value>)",
        "base-2": "rgb(var(--color-base-2) / <alpha-value>)",
        "base-3": "rgb(var(--color-base-3) / <alpha-value>)",
        "base-4": "rgb(var(--color-base-4) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
