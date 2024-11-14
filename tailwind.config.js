/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3A3A3C',
        secondary: '#1C1C1C',
        greenPrimary: '#00b894',
        greenSecondary: '#00b894'
      }
    }
  },
  plugins: []
}
