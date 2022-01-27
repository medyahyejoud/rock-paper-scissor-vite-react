module.exports = {
  content: ["./src/**/*.{js,jsx,tsx}", "./index.html"],
  theme: {
    screens: {
      desktop: "1366px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      "dark-500": "hsl(229, 25%, 31%)",
      "dark-600": "hsl(229, 25%, 25%)",
      "dark-900": "hsl(223, 47%, 16%)",
      "score-text": "hsl(229, 64%, 46%)",
      "header-outline": "hsl(217, 16%, 45%)",
      "yellow-400": "hsl(40, 84%, 53%)",
      "yellow-500": "hsl(39, 89%, 49%)",
      "blue-400": "hsl(230, 89%, 65%)",
      "blue-500": "hsl(230, 89%, 62%)",
      "red-400": "hsl(349, 70%, 56%)",
      "red-500": "hsl(349, 71%, 52%)",
    },
    fontFamily: {
      sans: ["'Barlow Semi Condensed'", "sans serif"],
    },
    extend: {
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(ellipse at top, rgba(39,69,107,1) 0%, rgba(20,21,57,1) 100%);",
      },
    },
  },
  plugins: [],
};
