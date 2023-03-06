/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'form': '#CECED0',
        'box': '#282828',
        'yl': '#FFFD01',
        'black-rgba': 'rgba(0, 0, 0, 0.7)',
        'hover-bg': '#3A3B3C'
      }
    },
  },
  plugins: [],
}