/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/preline/preline.js',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#1c2023',
      red: {
        DEFAULT: '#ff4d62',
        light: '#ff7a7a',
        pale: '#fee',
      },
      blue: {
        DEFAULT: '#1d73e9',
        light: '#489df5',
        pale: '#eff',
      },
      gray: {
        900: '#707f89',
        700: '#98a6b5',
        500: '#cbd6e0',
        300: '#e3e9ee',
        100: '#fafafa',
      },
      yellow: {
        pale: '#ffffd9',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        md: '0.625rem',
      },
    },
    extend: {
      screens: {
        xl: '1280px',
        '2xl': '1280px',
      },
      fontFamily: {
        sans: ['Arial', 'var(--font-notojp)', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('preline/plugin'), require('@tailwindcss/typography')],
}
