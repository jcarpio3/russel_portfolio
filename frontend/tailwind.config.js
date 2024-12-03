/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        Fadeout: {
          from : { opacity: 1},
          to : { opacity: 0},
        }
      },
      animation: {
        Fadeout: "Fadeout 5s",
      },
    },
  },
  plugins: [],
}