/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#141414",
        secondary: "#3575E2",
      },
      fontFamily: {
        primary: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
