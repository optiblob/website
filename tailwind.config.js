/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'beige': '#ebe9d6',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
