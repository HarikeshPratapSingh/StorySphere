module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '1/12': '8.333333333%',
      },
      colors: {
        'beige-1': '#F6ECE4',
        'beige-2': '#FAE0C9',
        'gray-1': '#9F9F9F'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
