/** @type {import('tailwindcss').Config} */

import  { black, transparent,white } from 'tailwindcss/colors'

const plugin = require('tailwindcss/plugin')

export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black,
      transparent,
      white,
      'primary': "#99ff99",
      gray: {
        400: '#34343A',
        500: '#2CD2CD31',
        600: '#25242A',
        800: '#222228'
      },
      purple: '#B906F2',
      aqua: '#00DBF1'

    },
    fontSize: {
      sm: '1rem',
      base: '1.2rem',
      xl: '1.45rem',
      '2xl': '1.863rem',
      '3xl': '2rem',
      '4xl': '2.741rem',
      '5xl': '3.552rem',

    }

   // extend: {},
  },


  plugins: [
    plugin(function ({addComponents, addUtilities}) {

      addUtilities({
        '.hide': {
          display: 'none',
      
        }
      }),
      addComponents({
        '.btn': {
          display: 'inline-block'
        }
      })
    
      

    })

  ],
}



