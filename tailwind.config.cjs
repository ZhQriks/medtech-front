/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#1b1b1b",
      transparent: "transparent",
      primary: "#FD6915",
      stroke: "#E5E5E5",
    },
    extend: {
      fontFamily: { sans: ["-apple-system", "sans-serif"] },
      animation: {
        "ripple-effect": "0.6s linear ripple",
      },
      keyframes: {
        ripple: {
          to: { transform: "scale(25)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
