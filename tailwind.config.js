/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0a192f",
        leaf: "#64ffda",
        lightState: "#ccd6f6",
        lightNavy: "#112240",
      },
    },
  },
  plugins: [],
};
