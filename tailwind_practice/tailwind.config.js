/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'altRed': '#8a0303',
      },
      maxWidth: {
        '363px': '363px',
        'fullScr': '1440px'
      },
      fontFamily: {
        'main': ['Basis Grotesque Pro', 'Helvetica Neue', 'sans-serif']
      },
      fontSize: {
        '38px': '38px',
        '57px': '57px',
      },
      lineHeight: {
        '104%': '104%',
        '111%': '111%',
      },
      letterSpacing: {
        'standard': '-0.03em'
      },
      padding: {
        '15px': '15px',
        '18px': '18px',
        '23px': '23px',
        '33px': '33px',
        '35px': '35px',
        '59px': '59px',
        '50px': '50px',
        '30px': '30px',
        '70px': '70px',
        '90px': '90px',
        '100px': '100px',
        '101px': '101px',
        '120px': '120px',
        '122px': '122px',
        '130px': '130px',
        '325px': '325px',
        '326px': '326px',
        '292px': '292px',
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
        '892px': '892px',
        '1040px': '1040px',
      },
      spacing: {
        '29px': '29px',
        '34px': '34px',
        '353px': '353px',
      },
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '85': '0.85',
      },
      colors: {
        'main-blue': '#0536FC',
        'light-grey': 'rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
