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
        primary_color_dark: "#274472",
        secondary_color: "#757575",
        tertiary_color: "#d1d5db",
        dark_background: "#5885AF",
      },
      keyframes: {
        fade_in: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        typing: {
          from: { width: "33%" },
          to: { width: "100%" },
        },
      },
      animation: {
        fade_in: "fade_in 1.25s ease-in-out",
        typing: "typing .5s steps(20, end) forwards",
      },
    },
  },
  plugins: [],
};
