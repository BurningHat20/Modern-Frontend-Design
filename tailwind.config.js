// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#00FF19",
      },
      fontFamily: {
        satoshi: ["satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
