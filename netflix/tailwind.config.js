/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'smb': { 'max': '320px' }, // small mobile screens
      'mmb': { 'max': '375px' }, // medium mobile screens
      'lmb': { 'max': '425px' }, // large mobile screens
      'md': { 'max': '768px' },  // tablet screens
      'lg': { 'max': '1024px' }, // laptop screens
      'xl': { 'max': '1280px' }, // large laptop screens
      '2xl': { 'max': '1536px' } // extra monitor laptop screens
    },
    extend: {},
  },
  plugins: [],
}

