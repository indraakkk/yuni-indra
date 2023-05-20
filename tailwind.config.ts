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
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-150%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(150%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },

    },
  },
  plugins: [],
} satisfies Config;
