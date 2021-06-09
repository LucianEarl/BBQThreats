module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // negative zIndex

    // custom fonts
    fontFamily: {
      bodoni: ["Bodoni Moda"],
      righteous: ["Righteous"],
    },
    // custom colors
    extend: {
      colors: {
        background: "#8E0F15",
      },
      zIndex: {
        negative1: "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
