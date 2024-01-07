/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue-bg' : '#5f6168',
        'black-bg' : '#2c2d30',
        'glod-color' : '#cbab61'
      }
    },
  },
  plugins: [],
}

