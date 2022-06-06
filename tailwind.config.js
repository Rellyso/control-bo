module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: {
          primary: "#1ABDCE",
          secondary: "#005099",
        }
      },
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui', 'monospace']
      }
    },
  },
  plugins: [],
}
