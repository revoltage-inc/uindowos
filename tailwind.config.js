const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['hatch'],
    },
    colors: {
      transparent: colors.transparent,
      current: colors.current,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
    },
    extend: {
      cursor: {
        default: 'url(/svg/common/cursor.svg) 0 0, default',
      },
      colors: {
        main: '#ff7b88',
        snow: '#f9ece7',
        khaki: '#ffd68c',
        'royal-blue': '#7f9dfd',
        'dark-olive': '#867f78',
        'light-olive': '#b6afa8',
        'coral-pink': '#ff7b88',
        'pastel-pink': '#ffa3aa',
        'pastel-yellow': '#ffe4ac',
        'pastel-aqua': '#b9eedd',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    plugin(({ addVariant }) => {
      addVariant('not-first', '&:not(:first-child)')
      addVariant('not-last', '&:not(:last-child)')
    }),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.box': {
          display: '-webkit-box',
        },
      })
    }),
  ],
  important: false,
}
