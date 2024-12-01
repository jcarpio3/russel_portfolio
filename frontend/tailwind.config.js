/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        Fadeout: {
          '0%' : { transform: 'translateY(100%) opa(0deg)'},
          '100%': { transform: 'translateY(-100%) rotate(360deg)'},
        }
      },
      animation: {
        Fadeout: "Fadeout 5s alternate infinite",
      },
    },
  },
  plugins: [],
}