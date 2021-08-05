module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class' ** media is for time that we want to be dark mode if user chrome is dark mode
  theme: {
    debugScreens: {
      position: ['top', 'left'],
    },
    extend: {
      fontFamily: {
        headline: ['Inconsolata']
      },
      colors: {
        mainColor: '#fcfc00',
        secondColor: '#fc00f0'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens')
  ],
}
