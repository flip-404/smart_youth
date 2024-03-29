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
        E4A400: "#E4A400",
      },
      backgroundColor: {
        "86A1FF": "#86A1FF",
        FFF6A5: "#FFF6A5",
        D9D9D9: "#D9D9D9",
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
        "266px": "266px",
        "3000px": "3000px",
        "basic-section": "calc(100vh - 80px)",
      },
      padding: {
        "10px": "10px",
        "13px": "13px",
        "20px": "20px",
        "16px": "16px",
        "25px": "25px",
        "30px": "30px",
        "40px": "40px",
        "60px": "60px",
        "68px": "68px",
        "72px": "72px",
        "80px": "80px",
        "85px": "85px",
        "90px": "90px",
        "105px": "105px",
        "120px": "120px",
        "123px": "123px",
        "130px": "130px",
        "200px": "200px",
        "280px": "280px",
      },
      margin: {
        "37px": "37px",
        "80px": "80px",
        "90px": "90px",
        "123px": "123px",
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
        "94px": "94px",
        "128px": "128px",
      },
    },
  },
  plugins: [],
};
export default config;
