/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5043A1",
        secondary: "#9182FF",
        bgColor: "#3A374D",
        tertiary: "#7F7AA2",
        orangeColor: "#d66d2a",
        darkGray: "#262626"
      },
      backgroundImage: {
        "gradient-orange-red": "linear-gradient(90deg, #d66d2a, #ff4500, #ff0000)",
        "gradient-blue-purple": "linear-gradient(90deg, #5043A1, #9182FF, #7F7AA2)",
      },
    },
  },
  plugins: [],
};

