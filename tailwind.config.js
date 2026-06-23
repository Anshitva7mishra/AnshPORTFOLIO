/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./404.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F5F0E6",
        ink: "#111111",
        accent: "#B94A32",
        "border-custom": "#C8BDAA",
      },
      fontFamily: {
        headline: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Libre Baskerville'", "Garamond", "serif"],
        mono: ["'IBM Plex Mono'", "'Courier New'", "Courier", "monospace"],
        signature: ["'Dancing Script'", "cursive"],
      },
    },
  },
  plugins: [],
}
