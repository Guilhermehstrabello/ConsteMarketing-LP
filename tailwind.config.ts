import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: { 
      'laranja' : '#FF8500',
      'roxo' : '#310276',
      'cinza' : '#474747'
    },
    extend: {
      fontFamily: {
        Neue: ['NeueMontreal', 'sans-serif'],
        Glacial: ['Glacialindifference', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
export default config;
