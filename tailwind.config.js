module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF8C00', // Dark orange
          dark: '#E67300',
        },
        secondary: {
          DEFAULT: '#4A90E2', // Blue
          dark: '#3A7BC8',
        },
      },
    },
  },
  plugins: [],
}

