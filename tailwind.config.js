/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('./assets/home-bg.png')",
        'calculator-bg': "url('./assets/calculator-bg.png')",
        'logo-1': "url('./assets/logo-1.png')",
        'quote-bg': "url('./assets/quote.png')",
      },
    },
  },
  plugins: [],
};
