/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
