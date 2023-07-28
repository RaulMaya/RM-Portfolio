/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '120': '30rem', /* 480px */
        '144': '36rem', /* 576px */
        // Add as many as you need
      }
    }
  },
  variants: {},
  plugins: []
}
