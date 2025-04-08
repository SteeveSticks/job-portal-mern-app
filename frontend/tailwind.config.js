/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        secondary: "#3575E2",
        success: "#51A687",
      },
      fontFamily: {
        primary: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
