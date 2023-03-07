/** @type {import('tailwindcss').Config} */
const { colors } = require('./figma/designToken.json');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      wd: {
        white: colors.white.value,
        primary: colors.primary.value,
        secondary: colors.secondary.value,
        info: colors.info.value,
        destructive: colors.destructive.value,
      },
    },
  },
  plugins: [],
};
