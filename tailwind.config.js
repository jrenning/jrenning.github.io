/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_color: "#6495ED",
        secondary_color: "#757575",
        tertiary_color: "#d1d5db",
      },
    },
  },
  plugins: [],
};
