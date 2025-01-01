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
        whiteOverlay: "linear-gradient(to bottom, rgba(255,255,255,1) 10%, rgba(0,0,0,0) 100%)",
        hardBlueOverlay: "linear-gradient(to bottom, rgba(3,37,101,1) 0%, rgba(6,74,203,0.3) 52%, rgba(3,37,101,1) 100%)",
      },
      fontSize: {
        "9xl": "8rem",
        "10xl": "20rem",
      },
      textColor: {
        umsaBlue: "rgba(12,30,70,1)"
      },
      backgroundColor: {
        umsaBlue: "rgba(12,30,70,1)"
      },
      width: {
        "100xl": "1000px",
      },
      animation: {
        "spin-slow": "scale 10s linear infinite",
        "pulse-slow": "pulse 3.5s ease-in-out infinite",
        "pulse-scale": "pulseScale 5s ease-in-out infinite",
        "bounce-custom": "bounceCustom 2.5s ease-in-out infinite"
      },
      keyframes: {
        pulseScale: {
          "0%, 100%": {
            transform: 'scale(1)',
            opacity: '0.8',
          },
          "50%": {
            transform: "scale(1.04)",
            opacity: '1',
          },
        },
        bounceCustom: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-15px)"
          }
        }
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.scale-hover': {
          '@apply hover:scale-125 transition-transform duration-300': {},
        },
      });
    },
  ],
} satisfies Config;
