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
        "gradient-bg": "url('/gradient.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: {
          white: "var(--secondary-white)",
          brown: "var(--secondary-brown)",
        },
        "body-txt": "#E5E5E5",
        accent: {
          darkGray: "var(--accent-dark-gray)",
        },
      },
      fontFamily: {
        primary: ["Space Grotesk", "sans-serif"],
        secondary: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      dropShadow: {
        "custom-red": "0 4px 3px rgba(174, 59, 59)",
      },
      boxShadow: {
        "custom-red": "0 25px 50px -12px rgba(255, 77, 42, 0.25)", 
      },
      screens: {
        tablet: "980px",
        "tablet-sm": "700px", 
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
