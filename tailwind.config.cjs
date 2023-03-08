/** @type {import('tailwindcss').Config} */

const { colors } = require('./figma/designToken.json');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'app-primary-color': colors['app-brand-color'],
      'app-secondary-color': colors['app-secondary-color'],
      'app-info-color': colors['app-info-color'],
      'app-destructive-color': colors['app-destructive-color'],
      'app-secondary-text-color': colors['app-secondary-text-color'],
      'app-primary-text-color': colors['app-primary-text-color'],
    },
  },
  plugins: [],
};
