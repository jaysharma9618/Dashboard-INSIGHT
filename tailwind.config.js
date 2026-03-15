/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
            brand:{
                purple: "#5347CE",
                lavender: "#887CFD",
                blue: "#4896FE",
                teal: "#16C8C7",
            },
        },
        fontFamily: {
            sans: [
                "Inter",
                "SF Pro Display",
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "sans-serif",
            ],
        },
    },
  },
  plugins: [],
}