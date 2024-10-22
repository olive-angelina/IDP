/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Make sure Tailwind applies to all necessary files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
