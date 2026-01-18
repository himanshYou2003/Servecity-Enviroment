/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        eco: {
          forest: "#2E5942",
          sage: "#8FA893",
          beige: "#F2F0E9",
          sky: "#D6EAF8",
          dark: "#1A3326",
        },
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop')",
      },
    },
  },
  plugins: [],
};
