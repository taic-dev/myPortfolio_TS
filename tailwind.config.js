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
      xl: {'max': '1200px'},
      lg: {'max': '900px'},
      md: {'max': '700px'},
      sm: {'max': '600px'},
      xs: {'max': '450px'},
    },
    extend: {
      fontSize: {
        topTitle: "clamp(45px,7.7vw,59px)"
      }
    },
  },
  plugins: [],
};
