/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: '"Abhaya Libre", serif',
        secondary: '"Abril Fatface", serif',
      },
      colors: {
        main: "#B83672",
      },
    },
  },
  plugins: [],
};
