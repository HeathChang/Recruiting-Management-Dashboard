/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '1079px',
      'web': '1080px',
    },
    extend: {},
  },
  plugins: [],
}

