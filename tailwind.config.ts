import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"]
      },
      backgroundImage: {
        starImg: "url('/star-background.jpg')",
        blueOverlay: "linear-gradient(to bottom, rgba(3,37,101,1) 10%, rgba(6,74,203,0.3) 52%, rgba(3,37,101,1) 100%)",
      },
      fontSize: {
        "10xl": "16rem",
      },
      backgroundColor: {
        umsaBlue: "rgba(12,30,70,1)"
      },
    },
  },
  plugins: [],
} satisfies Config;
