// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Ensure dark mode is enabled
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Great Vibes', 'cursive'],
      },
      keyframes: {
        swing: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(10deg)' },
          '75%': { transform: 'rotate(-10deg)' },
        },
      },
      animation: {
        swing: 'swing 2s ease-in-out infinite',
      },
      colors: {
        softTeal: '#a0d8d3', // Add your desired soft teal color here
      },
    },
  },
  plugins: [],
}




