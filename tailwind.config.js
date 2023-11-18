/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif;",
        raleway: "'Raleway', sans-serif;",
        cinzel: "'Cinzel', serif",
      },
      colors: {
        primary_color: "#CD9003",
        secondary_color: "#EEFF25",
        text_color_primary: "#151515",
        text_color_secondary: "#737373",
        footer_color_primary: "#1F2937",
        footer_color_secondary: "#111827",
      },
    },
  },
  plugins: [require("daisyui")],
};
