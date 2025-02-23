import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold1: '#D2A024',
        gold2: '#865D00',
        blue1: '#484CB0',
        blue2: '#2A014B',
        blue3: '#83CBFB',
        blue4: '#377FD9'
      },
    },
  },
  plugins: [],
} satisfies Config;
