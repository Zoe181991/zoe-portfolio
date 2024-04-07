import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "about-bg-image": `url('${process.env.BASE_PATH}/images/clouds.jpg')`,
        "body-bg-dots": `url('${process.env.BASE_PATH}/dot.svg')`,
        "body-bg-shapes": `url('${process.env.BASE_PATH}/bgShapes.svg')`,
      },
      colors: {
        "text-base-color": "rgb(var(--color-text-base-color) / <alpha-value>)",
        "border-base-color":
          "rgb(var(--color-border-base-color) / <alpha-value>)",
        "base-1": "rgb(var(--color-base-1) / <alpha-value>)",
        "base-2": "rgb(var(--color-base-2) / <alpha-value>)",
        "base-3": "rgb(var(--color-base-3) / <alpha-value>)",
        "base-4": "rgb(var(--color-base-4) / <alpha-value>)",
        "base-5": "rgb(var(--color-base-5) / <alpha-value>)",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
