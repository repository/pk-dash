/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Atkinson Hyperlegible",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        pk: {
          50: "#FCEEDD",
          100: "#FBE4CB",
          200: "#F8D0A5",
          300: "#F5BD7F",
          400: "#F2A959",
          500: "#EE8E25",
          600: "#CB7210",
          700: "#97550C",
          800: "#633708",
          900: "#2F1A04",
        },
      },
    },
  },
  plugins: [],
};
