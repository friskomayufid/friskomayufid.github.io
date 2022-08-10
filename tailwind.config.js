/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      slate: colors.slate,
      'primary': '#3D3D3D',
      'secondary': '#575757',
      'mainred': '#C31A12',
      'graywhite': '#E9EBEC',
      'graysecond': '#D7D7D7'
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
