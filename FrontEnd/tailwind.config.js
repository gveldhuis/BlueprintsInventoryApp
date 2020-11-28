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
      width: {
        '7/10' : '70%',
      },
      height: {
        '1/4' : '25%',
        '1/2' : '50%',
        '3/4' : '75%',
        '1/5' : '20%',
        '2/5' : '40%',
        '3/5' : '60%',
        '7/10' : '70%',
        '4/5' : '80%',
        '1/8' : '12.5%',
        '7/8' : '87.5%',
        '1/3' : '33.33%',
        '2/3' : '66.66%',
        '11/12' : '91.666667%',
      },
      maxHeight: {
        '1/2' : '50%',
        '3/4' : '75%',
        '3/5' : '60%',
      },
      minHeight: {
        '1/4' : '25%',
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
    backgroundColor: ['odd', 'even', 'checked'],
    borderWidth: ['last'],
  },
}