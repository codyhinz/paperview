/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          red: '#DF513B',
          pink: '#E56EA9',
          orange: '#F4BD3E',
          green: '#3DCC45',
          blue: '#3981D8',
          purple: '#8567A1',
        }
      }
    },
  },
  plugins: [],
}