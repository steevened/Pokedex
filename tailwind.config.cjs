/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lPrimary: '#66cc8a',
        lSecondary: '#377cfb',
        lAccent: '#ea5234',
        lNeutral: '#333c4d',
        lNeutralContent: '#f9fafb',
        lBase100: '#ffffff',
        lBase200: '#e6e6e6',
        lBase300: '#cfcfcf',
        lbaseContent: '#333c4d',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('daisyui')],
}
