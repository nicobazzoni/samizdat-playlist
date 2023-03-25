/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      backgroundImage: {
        'navy': "url('./src/assets/navy.png')",
      }
      
    },
  },
  plugins: [],
}