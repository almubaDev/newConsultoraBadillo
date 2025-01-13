/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a237e', // Color principal basado en tu logo
        secondary: '#ffffff',
        accent: '#f5f5f5',
        text: '#2c3e50',
      },
    },
  },
  plugins: [],
}