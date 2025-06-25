/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lightest: "var(--primary-lightest)",
          lighter: "var(--primary-lighter)",
          light: "var(--primary-light)",
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
          darker: "var(--primary-darker)",
          darkest: "var(--primary-darkest)",
        },
        secondary: {
          lightest: "var(--secondary-lightest)",
          lighter: "var(--secondary-lighter)",
          light: "var(--secondary-light)",
          DEFAULT: "var(--secondary)",
          dark: "var(--secondary-dark)",
          darker: "var(--secondary-darker)",
          darkest: "var(--secondary-darkest)",
        },
        gray: {
          lightest: "var(--gray-lightest)",
          lighter: "var(--gray-lighter)",
          light: "var(--gray-light)",
          DEFAULT: "var(--gray)",
          dark: "var(--gray-dark)",
          darker: "var(--gray-darker)",
          darkest: "var(--gray-darkest)",
        },
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
      },
    },
  },
  plugins: [],
};
