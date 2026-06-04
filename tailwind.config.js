/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Space Grotesk'", 'sans-serif'],
        body: ["'Inter'", 'sans-serif'],
      },
      colors: {
        // Owned brand color — pure cobalt blue. NEVER purple.
        blue: {
          DEFAULT: '#002FD6',
          600: '#0026B0',
          100: '#E8ECFF',
        },
        ink: '#0A0E1A',
        navy: '#05103A',
        paper: {
          DEFAULT: '#FFFFFF',
          2: '#F6F7FB',
        },
        line: '#E5E7EF',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
