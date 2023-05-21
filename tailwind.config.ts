import { type Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme'
// const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'yi-white': '#FFF7F1',
        'yi-rose': '#BD908A',
        'yi-sage': '#BEC9B9',
        'yi-dark': '#4A4A4A',
      },
      fontFamily: {
        'Allura': ['Allura', ...defaultTheme.fontFamily.sans],
        'CinzelDecorative': ['CinzelDecorative', ...defaultTheme.fontFamily.sans],
        'Itim': ['Itim', ...defaultTheme.fontFamily.sans],
        'Parisienne': ['Parisienne', ...defaultTheme.fontFamily.sans],
        'ViaodaLibre': ['ViaodaLibre', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        scroll: 'scroll 50s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(calc(-204px*10))' },
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
