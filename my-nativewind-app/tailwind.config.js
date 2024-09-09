/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",  // Include the `app` directory
    "./components/**/*.{js,jsx,ts,tsx}", // Include `components` if you have custom components
    "./screens/**/*.{js,jsx,ts,tsx}",  // Include `screens` directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

