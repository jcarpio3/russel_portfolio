/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        anilines:{
          "0%": {
            transform: "translateY(px)"
          },
          "100%": {
            transform: "translateY(-1200px)"
          }
        },
        Ascend: {
          "0%,100%": {
            transform: "translateY(-2px)"
          },
          "50%": {
            transform: "translateY(0px)"
          }
        },
        Fadeout: {
          from : { opacity: 1},
          to : { opacity: 0},
        }
      },
      animation: {
        Fadeout: "Fadeout 5s",
        Ascend: "Ascend 1s ease-in-out infinite",
        anilines: "anilines 3s linear infinite"
      },
    },
  },
  plugins: [],
}