/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
      },
      boxShadow: {
        custom: "0 -11px 21px 0 rgba(0,0,0,0.5)",
      },
      maxWidth: {
        "7xl": "1280px",
      },
    },
  },
  plugins: [],
};
