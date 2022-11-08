/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'beige': '#ebe9d6',
      },
      animation: {
        'smooth-display-element': 'smooth 0.7s',
      },
      keyframes: {
        smooth: {
          '0%': { transform: 'translate(0, 110%)' },
          '100%': { transform: 'translate(0, 0%)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
