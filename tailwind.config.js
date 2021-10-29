module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'tp-blue-1': '#7C83FD',
        'tp-blue-2': '#5C7AEA',
        'tp-blue-3': '#415BBD',
        'tp-dark': '#0A1931',
        'tp-white': '#F5F7FB',
        'tp-white-2': '#DBE6FD',
        'tp-orange': '#F7B308',
        'tp-gray': '#464E5A'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
