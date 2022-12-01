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
    screens: {
      // 'sm': {'min': '640px', 'max': '767px'},

      // 'md': {'min': '768px', 'max': '1023px'},

      // 'lg': {'min': '1024px', 'max': '1279px'},

      laptop: { min: "1025px", max: "1366px" },

      desktop: { min: "1367px" },
    },
  },
  plugins: [],
};
