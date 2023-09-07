/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "10xl": "9rem",
    },
    extend: {
      opacity: {
        0: "0",
      },
      rotate: {
        270: "270deg",
      },
      width: {
        120: "30rem" /* 480px */,
        144: "36rem" /* 576px */,
      },
      animation: {
        marqueeX: "marqueeX 25s linear infinite",
        marqueeX2: "marqueeX2 25s linear infinite",
        marqueeY: "marqueeY 25s linear infinite",
        marqueeY2: "marqueeY2 25s linear infinite",
      },
      keyframes: {
        marqueeX: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueeX2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marqueeY: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        marqueeY2: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
