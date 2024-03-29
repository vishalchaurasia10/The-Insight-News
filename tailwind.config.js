/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito':['Nunito', 'sans-serif'],
        'bangers':['Bangers', 'cursive'],
        'josefin':['Josefin Sans', 'sans-serif'],
        'lora':['Lora', 'serif'],
        'Baloo':['Baloo Bhai 2', 'cursive'],
        'Archivo':['Archivo Black', 'sans-serif'],
        'Poppins':['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
