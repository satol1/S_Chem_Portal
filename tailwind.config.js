/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
        },
        teal: {
          50: '#f0fdf4',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
        },
        science: {
          light: '#f8fafc',
          dark: '#0f172a',
          accent: '#0284c7',
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Golos Text', 'Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}
