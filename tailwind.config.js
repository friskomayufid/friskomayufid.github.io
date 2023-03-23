/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#696969',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
}
