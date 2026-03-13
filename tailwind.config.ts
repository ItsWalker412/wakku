import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        primary: {
        DEFAULT: "#6366f1",
        foreground: "#ffffff"
        },
        muted: "#f3f4f6"
    }
    ,
    },
  },
  plugins: [],
};

export default config;
