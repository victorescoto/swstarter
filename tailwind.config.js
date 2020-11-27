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
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'custom-header': '0 2px 0 0 #dadada',
      },
    },
  },
};
