/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  important: true,
  theme: {
    colors: {
      transparent: "transparent",
      
    },
  },
};
export default config;
