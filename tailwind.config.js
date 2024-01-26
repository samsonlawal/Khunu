/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lipstick: "#E33E3C",
        lightlipstick: "#F8D1D0",
        graylip: "#595959",
        palelip: "#FDFFF6",
      },
      fontFaimly: {
        montserrat: ["Montserrat", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "576px",
        md: "665px",
        lg: "992px",
        xl: "1200px",
      },
      spacing: {
        96: "24rem",
        120: "27rem",
        128: "30rem", // Example of a larger fixed width
        140: "37rem", // Another example
        // ...
      },
    },
  },
  plugins: [],
};
