module.exports = {
  important: true,
  theme: {
    fontFamily: {
      sans: ['Avenir', 'sans-serif'],
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      default: '0.25rem',
      default: '4px',
      'md': '0.375rem',
      'lg': '10px',
      'full': '9999px',
      'large': '12px',
    },
    extend: {
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
    textColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
}