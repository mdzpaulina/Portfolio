/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        brand: {
          bg:     '#FBFBFC',
          ink:    '#2D2424',
          pink:   '#EBA8B1',
          purple: '#B39DDB',
          dark:   '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
}