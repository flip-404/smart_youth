import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sideBar: {
          active: "#2E2E2E",
          inactive: "#5C5C5C",
        },
        "6F6F6F": "#6F6F6F",
        "2D2D2D": "#2D2D2D",
      },
      backgroundColor: {
        "86A1FF": "#86A1FF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "280px": "280px",
        "basic-section": "calc(100vw - 280px)",
      },
      height: {
        "80px": "80px",
        "560px": "560px",
        "3000px": "3000px",
        "basic-section": "calc(100vh - 80px)",
      },
      padding: {
        "16px": "16px",
        "25px": "25px",
        "30px": "30px",
        "72px": "72px",
        "80px": "80px",
        "85px": "85px",
        "90px": "90px",

        "105px": "105px",
        "123px": "123px",
        "130px": "130px",
        "280px": "280px",
      },
      margin: {
        "80px": "80px",
        "128px": "128px",
        "380px": "380px",
      },
      flex: {
        "2": "2",
      },
      gap: {
        "12px": "12px",
        "21px": "21px",
        "26px": "26px",
        "46px": "46px",
        "128px": "128px",
      },
    },
  },
  plugins: [],
};
export default config;
