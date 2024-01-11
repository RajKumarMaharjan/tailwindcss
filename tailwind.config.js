/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'xs': '375px',

      'sm': '540px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '912px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1290px) { ... }

      '2xl': '1280px',
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
