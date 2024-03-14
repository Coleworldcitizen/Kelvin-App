/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'kode': ['Kode Mono'],
        'poppins': ['Poppins']
      },
      screens: {
        'xs': '360px',
        'sm': '640px',   // Small screens
        'md': '720px',   // Medium screens
        'lg': '1024px',  // Large screens
        'xl': '1280px',  // Extra large screens
      },

    },
   
    },
  
  variants: {},
  plugins: [],

}
