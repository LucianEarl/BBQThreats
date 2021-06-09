module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
      // negative zIndex
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
