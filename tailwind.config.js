/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#845ec2",
          200: "#00c9a7",
        },
      },
    },
  },
  plugins: [],
};
