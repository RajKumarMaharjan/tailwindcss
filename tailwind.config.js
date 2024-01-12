/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'xxs': '320px',
       // => @media (min-width: 320px) { ... }
      'xs': '375px',
       // => @media (min-width: 375px) { ... }
      'sm': '540px',
      // => @media (min-width: 540px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '912px',
      // => @media (min-width: 912px) { ... }
      'xl': '1024px',
       // => @media (min-width: 1024px) { ... }
      '2xl': '1280px',
      // // => @media (min-width: 1280px) { ... }
      '3xl': '1440px',
      // // => @media (min-width: 1440px) { ... }
    },
    extend: {
      lineHeight: {
        'extra-loose': '14px',
        'line': '100px',
        '12': '3rem',
      },
    },
  },
  plugins: [],
}
