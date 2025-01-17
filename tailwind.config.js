/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    './App.{js,jsx,ts,tsx}',
    './AppInner.{js,jsx,ts,tsx}',
    './src/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // 도움말 색상
        helpBlue: '#1B447A',
      },
    },
  },
  plugins: [],
};
