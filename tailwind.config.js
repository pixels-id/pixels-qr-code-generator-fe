/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coolGray: {
          50: "#F7F8F9",
          100: "#EEF0F3",
          200: "#D5DAE1",
          300: "#BBC3CF",
          400: "#8896AB",
          500: "#556987",
          600: "#4D5F7A",
          700: "#404F65",
          800: "#333F51",
          900: "#2A3342",
        },
        green: {
          50: "#F4FDF7",
          100: "#EAFAF0",
          200: "#CAF4D9",
          300: "#AAEDC3",
          400: "#6ADF95",
          500: "#03DAC5",
          600: "#26BC5E",
          700: "#209D4E",
          800: "#13A092",
          900: "#0E877B",
        },
      },
    },
  },
  plugins: [],
};
