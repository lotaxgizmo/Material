/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulse: 'pulse',
      },
      animation: {
        pulse: 'pulse 1s ease-in-out infinite',
        pulse1: 'pulse 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}