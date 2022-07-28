module.exports = {
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#ffbc42",
          400: "#d81159",
          500: "#8f2d56",
          600: "#218380",
          700: "#73d2de",
          800: "#FFBE41",
          900: "#9B90EA",
        },
      },
    },
  },
  plugins: [],
};
