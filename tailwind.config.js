/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'shade-1': 'rgba(37,39,52, 1)',
        'shade-2': 'rgba(51,54,70, 1)',
      },
    },
  },
  plugins: [],
};
