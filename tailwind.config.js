/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "light-purple": "#96207a",
      "deep-purple": "#68275e",
      black: "#2c2c2c",
      "light-black": "#383838",
      white: "#f5f5f5",
      grey: "#adadad",
      gold: "#FF8C00",
      red: "#FF0000"
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
    extend: {},
  },
  plugins: [],
};
