/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        heading: ['Inter', ...fontFamily.sans],
      },
      colors: {

        'blue': {
          400: '#60A5FA',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        'mat-red': '#DC2626',
        primary: '#DC2626',    // Red
        secondary: '#000000',  // Black
        white: '#FFFFFF',      // White
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },

        animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
        
      },
      
    } 
    },
  },
  safelist: [
    // Add color variations for dynamic classes
    {
      pattern: /(bg|text|from|to)-(blue|green|purple|orange|red|teal)-(100|500|600|700)/,
      variants: ['hover'],
    },
  ],
  plugins: [],
}

