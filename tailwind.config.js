

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nohemi: ["var(--font-nohemi)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      keyframes: {
        journeyFloat: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        "journey-float": "journeyFloat 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};