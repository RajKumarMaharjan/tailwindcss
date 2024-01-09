/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'xs': '380px',

      'sm': '580px',
      // => @media (min-width: 640px) { ... }

      'md': '810px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1026px',
      // => @media (min-width: 1290px) { ... }

      '2xl': '1260px',
      // // => @media (min-width: 1536px) { ... }
      '3xl': '1440px',
      // // => @media (min-width: 1536px) { ... }
    },
    extend: {
      lineHeight: {
        'extra-loose': '14px',
        'line': '100px',
        '12': '3rem',
      }
    },
  },
  plugins: [],
}
