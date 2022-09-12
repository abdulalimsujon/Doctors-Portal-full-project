/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#37cdbe",
          neutral: "#0A6558",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },


  plugins: [require("daisyui")],



}
