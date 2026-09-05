/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        parchment: {
          DEFAULT: '#f7f3ea',
          dark: '#ede4d3',
          light: '#fbf8f1',
        },
        ink: {
          DEFAULT: '#2a2118',
          light: '#5a4f42',
          muted: '#8a8278',
        },
        gold: {
          DEFAULT: '#b8962e',
          light: '#d4b85a',
          dark: '#9a7a1e',
          pale: '#e8d9a8',
        },
        wine: {
          DEFAULT: '#722f37',
          light: '#9c4a52',
          dark: '#5a1f25',
        },
        olive: {
          DEFAULT: '#6b7a3f',
          light: '#8a9a55',
          dark: '#4f5a2e',
        },
        stone: {
          DEFAULT: '#8a8278',
          light: '#b0a89e',
          dark: '#6a6258',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
