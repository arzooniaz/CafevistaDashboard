/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dash-primary": "#032858",
        "page-secondary": "#E7E7E7",
        "page-primary": "#FFFFFF",
        "primary-txt": "#FFFFFF",
        "page-btn-primary": "#032858",
      },
    },
  },
  plugins: [],
};
