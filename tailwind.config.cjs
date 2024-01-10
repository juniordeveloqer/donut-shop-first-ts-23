/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "pink-white":
          "linear-gradient(to right top, #eeb0d0, #f494c1, #f976af, #fd509a, #ff0082)",
        menu: "linear-gradient(to right bottom, #eeb0d0, #f494c1, #f976af, #fd509a, #ff0082)",
        newsroom:
          "linear-gradient(to left top, #eeb0d0, #f494c1, #f976af, #fd509a, #ff0082)",
        aboutus:
          " linear-gradient(to left bottom, #f09c00, #efa73b, #eeb15d, #ebbc7d, #e7c69c)",
      }),

      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"],
      },

      content: {
        sweet: "url('./assets/SWEET.png')",
        DELIGHTFUL: "url('./assets/DELIGHTFUL.png')",
        planet: "url('./assets/planet.png')",
      },
    },
  },
  plugins: [],
};
