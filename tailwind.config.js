module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'Source Sans Pro',
        'ui-sans-serif',
        'Roboto',
      ],
    },
    extend: {
      screens: {
        tablet: '640px',
        desktop: '1280px',
      },
      colors: {
        primary: '#28a154',
        secondary: '#fdcc4a',
        neutral: {
          black: '#09101d',
          1: '#2c3a4b',
          2: '#394452',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('postcss-import')
  ],
}
