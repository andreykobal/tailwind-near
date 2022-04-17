const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

