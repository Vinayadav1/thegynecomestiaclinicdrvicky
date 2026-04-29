/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a1628',
          light: '#1a2942',
          dark: '#050b14',
        },
        teal: {
          DEFAULT: '#14b8a6',
          dark: '#0d9488',
        },
        amber: {
          DEFAULT: '#fbbf24',
          dark: '#d97706',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
