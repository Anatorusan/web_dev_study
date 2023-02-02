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
      padding: {
        '59px': '59px',
        '50px': '50px',
        '30px': '30px',
        '70px': '70px',
        '90px': '90px',
        '100px': '100px',
        '101px': '101px',
        '122px': '122px',
        '14.6%': '14.6%',
        '18.4%': '18.4%',
        '10.2%': '10.2%',
        '20.5%': '20.5%'
      },
      margin: {
        '18.4%': '18.4%',
        '10.2%': '10.2%',
        '20.5%': '20.5%'
      },
      screens: {
        'big-mobile': '426px',
        '840px': '840px',
        '1040px': '1040px',
      },
      spacing: {
        '29px': '29px',
      },
      opacity: {
        '35': '0.35',
        '85': '0.85',
      },
      colors: {
        'main-blue': '#0536FC',
      }
    },
  },
  plugins: [],
}
