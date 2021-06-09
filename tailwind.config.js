module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
