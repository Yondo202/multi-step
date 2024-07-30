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
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "arcade-color": "#ffaf7e",
        "advanced-color": "#fc7f8f",
        "pro-color": "#473dff",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },

      keyframes: {
        "card-enter": {
          from: { transform: "translateX(30px)", opacity: "0.5", filter:`blur(2px)` },
          to: { transform: "translateX(0px)", opacity: "1", filter:`blur(0px)`  },
        },
      },
      animation: {
        "card-enter": "card-enter 0.6s ease",
      },
    },
  },
  plugins: [],
};
export default config;

// --background: 215.29deg 100% 96.67%;
//   --card-background: 0 0 100%;

//   --primary: 212.05 97.78% 17.65%;

//   --foreground: 222.2 84% 4.9%;
//   /* --muted-foreground: 215.4 16.3% 46.9%; */
//   --muted-foreground: 240deg 1.94% 69.61%;

//   --destructive-foreground: 210 40% 98%;
