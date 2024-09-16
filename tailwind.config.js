/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#032858",
        "dash-primary": "#FFFFFF",
        "page-secondary": "#E7E7E7",
        "input-primary": "#E7E7E7",
        "page-primary": "#FFFFFF",
        "primary-txt-dash": "#898384",
        "page-btn-primary": "#032858",
        "hover-primary": "#032858",
        "page-btn-secondary": "#D9D9D9",
      },
      boxShadow: {
        "custom-white": "-5px -1px 20px 3px rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [],
};
