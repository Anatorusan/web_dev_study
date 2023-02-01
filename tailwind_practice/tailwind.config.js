/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'altRed': '#8a0303',
      },
      maxWidth: {
        'fullScr': '1440px'
      },
      fontFamily: {
        'main': ['Basis Grotesque Pro', 'Helvetica Neue', 'sans-serif']
      },
      letterSpacing: {
        'standard': '-0.03em'
      },
    },
  },
  plugins: [],
}
