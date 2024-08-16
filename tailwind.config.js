/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#121212',
        customDarker: '#191919',
        btnbg:'#333333'
      },
    },
  },
  plugins: [],
}

