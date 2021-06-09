module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // negative zIndex
    zIndex: {
      negative1: "-1",
    },
    // custom fonts
    fontFamily: {
      bodoni: ["Bodoni Moda"],
    },
    // custom colors
    extend: {
      colors: {
        background: "#8E0F15",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
