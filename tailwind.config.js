/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins",
        secondary: "Taprom"
      },
      colors: {
        primary: "#FF4900",
        secondary: "#ff5eid",
        textprimary: "#242424",
        textsecondary: "#7c7c7c",
        text: "#f0f0f0",
      }
    },
  },
  plugins: [],
}