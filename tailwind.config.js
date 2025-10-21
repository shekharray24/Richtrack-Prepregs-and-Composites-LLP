/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
      mullish: ["Mulish", "sans-serif"],
    },
    colors:{
    customblue: "hsl(210, 100%, 31%)",
    blackdark: "hsl(217.2, 32.6%, 17.5%)",
    dark: "hsla(210, 100%, 20%, 0.815)",
    white: "hsl(0, 0%, 98%)",
    orange: "hsl(25, 100%, 50%)",
    backgroundcolor: "hsla(210, 100%, 40%, 0.062)"
    }
    },
  },
  plugins: [],
}

