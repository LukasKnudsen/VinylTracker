/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          background: "oklch(var(--background) / <alpha-value>)",
          foreground: "oklch(var(--foreground) / <alpha-value>)",
          primary: "oklch(var(--primary) / <alpha-value>)",
          "primary-foreground": "oklch(var(--primary-foreground) / <alpha-value>)",
          muted: "oklch(var(--muted) / <alpha-value>)",
          border: "oklch(var(--border) / <alpha-value>)",
        },
      },
    },
    plugins: [],
  }  