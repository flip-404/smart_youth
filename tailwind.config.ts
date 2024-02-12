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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "280px": "280px",
      },
      height: {
        "80px": "80px",
        "560px": "560px",
        "3000px": "3000px",
      },
      padding: {
        "30px": "30px",
        "72px": "72px",
        "80px": "80px",
        "85px": "85px",
        "105px": "105px",
        "130px": "130px",
        "280px": "280px",
      },
      margin: {
        "80px": "80px",
        "380px": "380px",
      },
      flex: {
        "2": "2",
      },
      gap: {
        "46px": "46px",
      },
    },
  },
  plugins: [],
};
export default config;
