import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'gradient-bg': "url('/gradient.png')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: {
          white: "var(--secondary-white)",
          brown: "var(--secondary-brown)",
        },
        accent: {
          darkGray: "var(--accent-dark-gray)",
        }
      },
      fontFamily: {
        primary: ['Space Grotesk','sans-serif' ],
        secondary: ['Montserrat', 'sans-serif'],
         inter: ['Inter', 'sans-serif'],
      },
      dropShadow: {
        'custom-red': '0 4px 3px rgba(174, 59, 59)',
      },
      boxShadow: {
        'custom-red': '0 25px 50px -12px rgba(255, 77, 42, 0.25)', // Example for custom red shadow
      },
      screens: {
        'tablet': '980px', 
        'tablet-sm': '700px' // Custom extra small screen
       
      },
    },
  },
  plugins: [],
};
export default config;
