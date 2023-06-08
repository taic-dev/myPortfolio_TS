/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: {'max': '450px'},
      sm: {'max': '600px'},
      md: {'max': '700px'},
      lg: {'max': '900px'}
    },
    extend: {
      fontSize: {
        topTitle: "clamp(45px,7.7vw,59px)"
      }
    },
  },
  plugins: [],
};
