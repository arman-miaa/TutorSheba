/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#800080",
        secondary: "#FACC15",
        dark: "#111827",
        paragraph2: "#66789c",
      },
    },
  },
  plugins: [],
};
