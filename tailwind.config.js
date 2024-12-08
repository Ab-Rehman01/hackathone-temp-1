/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include all App Router files
    "./components/**/*.{js,ts,jsx,tsx}", // Add your components folder
  ],
  theme: {
    extend: {}, // Extend as needed
  },
  plugins: [],
};
