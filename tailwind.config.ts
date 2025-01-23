import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FEF9E1",
        secondary: "#A31D1D",
        tertiary: "#E5D0AC",
        light: "#FEF9E1",
      },
    },
  },
  plugins: [],
} satisfies Config;
