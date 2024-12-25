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
  plugins: [],
};
