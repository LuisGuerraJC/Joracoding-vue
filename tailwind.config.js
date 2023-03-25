/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./public/fonts/AtomicMD.tff",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'bg-base':'#0B0B16',
        'yellowBase': '#FBC100',
        'grayBase': '#413e4a',
        'aquaBase': '#008c9e',
        'blueBase': '#41a0a7',
        'redBase' : '#ff4242',
        'stoneBase' : '#2a2c31',
      },
      
      backgroundImage:{
        hero: "url('./public/images/fondo1.jpg')"
      },
      fontFamily:{
        condensed:"'Oswald', sans-serif",
        poppins:"'Poppins', sans-serif",
        logo:"'AtomicMD', sans-serif"
      },
    
    }
  },
  plugins: [],
}