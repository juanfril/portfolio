/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#015189',
        secondary: '#001f52',
        greenPrimary: '#00b894',
        greenSecondary: '#00b894'
      }
    }
  },
  plugins: []
}
