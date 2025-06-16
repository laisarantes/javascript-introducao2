/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        amarelo: '#E6C744',
        cinza: '#C2C8DA',
        cinzaEscuro: '#7C7C7C'
      },
      fontFamily: {
        fredoka: ['"Fredoka"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
