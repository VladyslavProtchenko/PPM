/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'gilda': ['Gilda Display', 'serif'],
        'dancing-script': ['Dancing Script', 'cursive'],
      },
    },
    screens: {
      '2xl': {'max': '1536px'},
      'xxl': {'max': '1450px'},
      'xl': {'max': '1280px'},
      'lg': {'max': '1024px'},
      'md': {'max': '768px'},
      'sm': {'max': '641px'},
    },
  },
  plugins: [],
}

