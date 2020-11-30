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
        'detail-link': '#0094ff',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'custom-header': '0 2px 0 0 #dadada',
        container: '0 1px 2px 0 #dadada',
        'search-input': 'inset 0 1px 3px 0 #dadada',
      },
      borderRadius: {
        'search-button': '20px',
      },
      minHeight: {
        'results-container': '582px',
        'results-list': '490px',
        'details-container': '417px',
      },
      width: {
        'search-container': '410px',
        'results-container': '582px',
        'details-container': '804px',
        'details-subcontainer': '322px',
      },
    },
  },
};
