/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1E2B4E',
          'navy-dark': '#152238',
          'navy-light': '#2C3E6B',
          slate: '#64748B',
          'slate-dark': '#475569',
          'slate-light': '#94A3B8',
          blue: '#0284C7',
          'blue-light': '#38BDF8',
          'blue-dark': '#0369A1',
          accent: '#06B6D4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
