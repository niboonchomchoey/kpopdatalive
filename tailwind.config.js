module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        permissiontoDance: "#FF8C42",
        butter: "#FFF275",
        primary: "#FF680A",
      },
      colors: {
        primary: "#FF680A",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}