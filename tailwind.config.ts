import type { Config } from 'tailwindcss';

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 25s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
