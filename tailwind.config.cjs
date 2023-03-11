/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#aaa6c3",
        tertiary: "#333233",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 20px 50px -10px #5d441b",
      },
      screens: {
        xs: "500px",
      },
      backgroundImage: {
        "hero-pattern": "url('https://i.imgur.com/KYzW9j0.jpg')",
      },
    },
  },
  plugins: [],
};
