/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('/public/pexels-sindre-strøm-966397.jpg')",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
