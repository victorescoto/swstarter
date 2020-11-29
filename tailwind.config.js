module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ab463',
        gainsboro: '#dadada',
        darkgray: '#848484bf',
        gray: '#c4c4c4',
      },
      textColor: {
        default: '#383838',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'custom-header': '0 2px 0 0 #dadada',
        'search-container': '0 1px 2px 0 #dadada',
        'search-input': 'inset 0 1px 3px 0 #dadada',
      },
      borderRadius: {
        'search-button': '20px',
      },
      width: {
        'search-container': '410px',
      },
    },
  },
};
