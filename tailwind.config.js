/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    fontFamily: {
      hansblack: ["Black Han Sans", "sans-s-serif"],
      opensans: ["Open Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "10rem",
        "2xl": "10rem",
      },
    },
    extend: {
      colors: {
        primary: "#404eed",
        black: "#23272a",
      },
      backgroundImage: {
        landingimg: "url('./images/assets/landing 1.svg')",
        starimg: "url('./images/assets/asset 7.svg')",
      },
    },
  },
  plugins: [],
};
