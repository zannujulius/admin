/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        secondary: "#0caf60",
        layoutcolor: "#f3f3f3",
        black: "#0e1525",
        green: "#0ba75c",
        lightgrey: "#f6f6f6",
      },
    },
  },
  plugins: [],
};
