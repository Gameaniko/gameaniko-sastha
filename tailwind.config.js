/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'aurora': 'aurora 20s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%': { transform: 'translateX(-50%) rotate(0deg)' },
          '100%': { transform: 'translateX(-50%) rotate(360deg)' },
        }
      },
      colors: {
        'gaming-primary': '#6a11cb',
        'gaming-secondary': '#2575fc',
      }
    },
  },
  plugins: [],
}