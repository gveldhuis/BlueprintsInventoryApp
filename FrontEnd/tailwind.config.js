module.exports = {
  important: true,
  theme: {
    extend: {
      spacing: {
        sm: '0.5rem',
        md: '1rem',
        lg: '2rem',
        xl: '4rem',
      },
      fontFamily: {
        avenir: ['Avenir', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      inset: {
        // Offset to account for navbar
        'nav' : '6rem',
      },
      screens: {
        // media breakpoint for when width is greater than height
        'landscape': {'raw': '(orientation: landscape)'},
      },
      height: {
        '1/4' : '25%',
        '1/2' : '50%',
        '3/4' : '75%',
        '1/5' : '20%',
        '2/5' : '40%',
      },
      fontSize : {
        '8xl' : '6rem',
        '10xl' : '8rem',
      },
      colors: {
        light_blue: '#015eea',
        med_blue: '#003296',
        dark_blue: '#00193c',
        grey: '#bdbbbb',
        white: '#fff',
      },
    }
  },
  variants: {
    textColor: ['responsive', 'active'],
  },
}