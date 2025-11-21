/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#B31A23',   // Deep Red - Main Action/Logo
          secondary: '#395228', // Moss Green - Growth/Data
          accent: '#FF7420',    // Vibrant Orange - Highlights
          alert: '#DA321C',     // Vivid Red - Hover/Urgency
          dark: '#090909',      // Black - Text/Footer/Solids
          bg: '#F3F3F3',        // Light Gray - Background
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
