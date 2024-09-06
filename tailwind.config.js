/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins"
      },
      colors: {
        hijau: "#31B380",
        hijau2: "#E7FFF6",
        kuning: "#FFB822",
        abu1: "#3C3C3C",
        abu2: "#7F7F7F",
        abu3: "#EEEEEE",
      }      
    },
  },
  plugins: [],
}