// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Ensure dark mode is enabled
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Great vibes', 'cursive'],
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
    },
  },
  plugins: [],
}



