/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
        screens: {
          "2xl": "1600px",
        },
      },
      colors: {
        navText: "#363636",

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // borderRadius: {
      //   lg: "var(--radius)",
      //   md: "calc(var(--radius) - 2px)",
      //   sm: "calc(var(--radius) - 4px)",
      // },
      screens: {
        // Min-width breakpoints
        "sm-mobile-360": "360px", // Min-width: 260px and above
        "sm-mobile-375": "375px", // Min-width: 375px and above
        "sm-mobile-400": "400px", // Min-width: 400px and above
        "sm-mobile-420": "420px", // Min-width: 420px and above
        "sm-mobile-450": "450px", // Min-width: 450px and above
        "sm-mobile-480": "480px", // Min-width: 480px and above
        "sm-mobile-610": "610px", // Min-width: 610px and above
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
