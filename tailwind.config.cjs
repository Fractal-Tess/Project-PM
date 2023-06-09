const daisyui = require('daisyui');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        sans: ['roboto', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        'gradient-keyframes-x': {
          '0%': { 'background-position': 'left' },
          '100%': { 'background-position': 'right' }
        },
        'gradient-keyframes-y': {
          '0%': { 'background-position': 'top' },
          '100%': { 'background-position': 'bottom' }
        }
      },
      animation: {
        'gradient-animation-x':
          'gradient-keyframes-x 10s linear infinite alternate',
        'gradient-animation-y':
          'gradient-keyframes-y 10s linear infinite alternate'
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        '50%': '50%',
        16: '4rem'
      },
      backgroundImage: {
        'background-dark': 'url(/bg-dark.jpg)',
        'background-light': 'url(/bg-light.jpg)'
      },
      backgroundSize: {
        300: '300%'
      }
    }
  },

  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#0096FF',
          secondary: '#FF1E56',
          neutral: '#A9FFF7',
          accent: '#E3E7AF',
          'base-100': '#fff',
          "--btn-text-case": "none",

        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=black]'],
          primary: '#0096FF',
          secondary: '#FF1E56',
          neutral: '#A9FFF7',
          accent: '#E3E7AF',
          'base-100': '#11151C',
          "--btn-text-case": "none",

        }
      }
    ]
  },
  plugins: [daisyui]
};

module.exports = config;
