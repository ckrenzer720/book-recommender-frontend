// filepath: c:\Users\sk8te\Desktop\book-recommender-frontend\tailwind.config.js
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        parchment: "#fdf6e3", // Light parchment background
        wood: "#deb887", // Warm wood tone
        leather: "#8b4513", // Dark leather tone
        ink: "#333333", // Dark ink for text
      },
      fontFamily: {
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif], // Classic serif font
      },
      backgroundImage: {
        "parchment-texture": "url('https://via.placeholder.com/150')", // Add a subtle texture
      },
    },
  },
  plugins: [],
};
