/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Здесь вы можете добавить свои собственные цвета
      },
      fontFamily: {
        // Здесь вы можете добавить свои шрифты
      },
    },
  },
  plugins: [],
} 