/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist", "sans-serif"],
        KG: ["Kalnia Glaze", "serif"],
      },
      colors: {
        primary: {
          100: "#5A003C",
          200: "#00c9a7",
        },
      },
      boxShadow: {
        normal: "0px 2px 4px 0px #A0A0A040",
      },
    },
  },
  plugins: [],
};
