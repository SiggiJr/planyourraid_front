/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        highlight: "#A6C3A7",
        darkgreen: "#112523",
      },
    },
  },
  plugins: [],
};
