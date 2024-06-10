/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sanse-serif"],
      },
      borderRadius: {
        xl: "24px",
        lg: "16px",
        md: "8px",
        sm: "4px",
      },
      boxShadow: {
        sm: "rgb(0 0 0 /12%) 0px 8px 20px",
        md: "rgb(0 0 0 /15%) 0px 0px 24px",
        xl: "rgb(0 0 0 /12%) 0px 8px 24px",
        xxl: "rgb(0 0 0 /20%) 0px 8px 24px",
      },
    },
    screens: {
      xl: { max: "1700px" },
      lg: { max: "1200px" },
      md: { max: "1060px" },
      sm: { max: "768px" },
      ss: { max: "620px" },
      xs: { max: "480px" },
    },
  },
  plugins: [],
};
