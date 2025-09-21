import type { Config } from "tailwindcss";

const config: Config = {
   darkMode: 'class',
   content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      keyframes: {
        scrollCycle: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'scroll-cycle': 'scrollCycle 20s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
