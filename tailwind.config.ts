import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'laranja': '#FF8500',
      'roxo': '#310276',
      'cinza': '#474747'
    },
    extend: {
      fontFamily: {
        'GlacialIndifference-Regular': ['GlacialIndifference-Regular', 'sans-serif'],
        'GlacialIndifference-Bold': ['GlacialIndifference-Bold', 'sans-serif'],
        'Montserrat-Bold': ['Montserrat-Bold', 'sans-serif'],
        'Montserrat-SemiBold': ['Montserrat-SemiBold', 'sans-serif'],
        'NeueMontreal-Bold': ['NeueMontreal-Bold', 'sans-serif'],
        'NeueMontreal-Medium': ['NeueMontreal-Medium', 'sans-serif']
      },

    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
export default config;
