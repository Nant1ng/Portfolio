/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '376px',
      'md': '768px',
      'lg': '840px',
      'xl': '1313px',
      '2xl': '1600px', 
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
