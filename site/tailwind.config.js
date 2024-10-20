/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      'averta': ['Averta-Regular', 'sans-serif'],
      'averta-semibold': ['Averta-Semibold', 'sans-serif'],
      'averta-bold': ['Averta-Bold', 'sans-serif'],
      'averta-black': ['Averta-Black', 'sans-serif'],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.page-layout': {
          '@apply max-w-6xl px-10 xl:px-10 m-auto': {},
        },
      });
    },
  ],
};
