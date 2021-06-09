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
        darkRed: "#3b0003",
      },
      // negative zIndex
      zIndex: {
        negative1: "-1",
      },
      padding: {
        "1/5": "20%",
      },
      inset: {
        "1/5": "20%",
        "-1/5": "-20%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
