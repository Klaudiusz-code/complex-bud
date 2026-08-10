/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <--- MUSI BYĆ TUTAJ!!!
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
