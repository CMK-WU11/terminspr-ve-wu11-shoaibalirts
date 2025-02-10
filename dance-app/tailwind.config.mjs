/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        grayish: "#EAEAEA",
        mehroonish: "#5E2E53",
        pinkish: "#E1A1E9",
        blackish: "#000000",
      },
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)"],
        roboto: ["var(--font-roboto)"],
        racing: ["var(--font-racingsansone)"],
      },
    },
  },
  plugins: [],
};
