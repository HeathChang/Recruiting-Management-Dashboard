/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 다크모드를 클래스 기반으로 활성화
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

