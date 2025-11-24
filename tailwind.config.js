/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': { 'max': '1919px' },  // 1919px 이하는 mobile
      'web': '1920px',                 // 1920px 이상은 web
    },
    extend: {},
  },
  plugins: [],
}

