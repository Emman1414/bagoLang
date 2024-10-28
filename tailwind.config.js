/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        primary: "#f9c04c",
        secondary: "#2b2b2b",
      },
      backgroundImage: {
        about:
          "linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),  url('../img/Banner-img.png')",
        discovers:
          "linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),  url('../img/bg-trees.png')",
      },
    },
  },
  plugins: [],
};
