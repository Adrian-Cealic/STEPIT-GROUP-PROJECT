/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#2260FF',
        lightBlue: '#CAD6FF',
        darkBlue: '#002B6B',
        unavailableColor: '#A9BCFE',
        lightGray: '#F6F8FB',
        mediumGray: '#6A6A6A',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}