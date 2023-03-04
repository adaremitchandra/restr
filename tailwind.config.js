/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#2D9CDB",
        dark: "#0f172a",
      },
      screens: {
        xl: "1200px",
        "2xl": "1200px",
      },
      borderWidth: {
        1: "1px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "spin-slow-30": "spin 30s linear infinite",
        "spin-slow-25": "spin 25s linear infinite",
        "spin-slow-10": "spin 10s linear infinite",
        "marquee-infinite": "marquee 150s linear infinite",
        "spin-slow": "spin 120s linear infinite",
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
        wiggle: "wiggle 0.5s ease-in-out both",
      },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)",
          },

          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)",
          },

          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%, 75%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
