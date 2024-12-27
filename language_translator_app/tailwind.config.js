/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        righteous: ["Righteous", "sans-serif"],
        russoOne: ["Russo One", "sans-serif"],
        notoSansap: ["Noto Sans ap", "sans-serif"],
        shojumaru: ["shojumaru", "system-ui"],
      },
      translate: ["active"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide": {
          "-ms-overflow-style": "none", // For IE and Edge
          "scrollbar-width": "none", // For Firefox
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none", // For Chrome, Safari, and Edge
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
