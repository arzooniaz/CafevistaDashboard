/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dash-primary": "#FFFFFF",
        "page-secondary": "#E7E7E7",
        "input-primary": "#E7E7E7",
        "page-primary": "#FFFFFF",
        "primary-txt-dash": "#898384",
        "page-btn-primary": "#032858",
        "hover-primary": "#032858",
        "page-btn-secondary": "#D9D9D9",
      },
    },
  },
  plugins: [],
};
