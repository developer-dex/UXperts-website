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
      },
      fontFamily: {
        inter: ["'Inter Display'", "'Inter'", "sans-serif"],
        jetbrains: ["'JetBrains Mono'", "monospace"],
      },
      fontSize: {
        '11': '11px',
        '15': '15px',
        '42': '42px',
        '26': '26px',
      },
      lineHeight: {
        '12': '12px',
        '22': '22px',
        '50': '50px',
        '30': '30px',
      },
      letterSpacing: {
        'tighter': '-0.3px',
        'tightest': '-0.6px',
        'slight': '0.1px',
        'medium': '0.2px',
      },
      borderRadius: {
        '12': '12px',
        '20': '20px',
        'xl': '16px',
        '2xl': '20px',
        '4xl': '40px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
} satisfies Config;
