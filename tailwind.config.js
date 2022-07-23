/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#3D3D3D',
      'secondary': '#575757',
      'mainred': '#C31A12',
      'graywhite': '#E9EBEC',
      'graysecond': '#D7D7D7',
      'white': '#FFFFFF'
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
