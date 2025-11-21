/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: '#094C7E',
        dark: '#0B3B59',
        primary: '#165F8C',
        soft: '#80A7BF',
        background: '#F2F2F2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Using Inter as a safe default for minimalist design
      },
    },
  },
  plugins: [],
}
