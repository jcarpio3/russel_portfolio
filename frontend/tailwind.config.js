/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinup: {
          '0%' : { transform: 'translateY(100%) rotate(0deg)'},
          '100%': { transform: 'translateY(-100%) rotate(360deg)'},
        }
      },
      animation: {
        spinup: "spinup 5s linear infinite"
      },
    },
  },
  plugins: [],
}