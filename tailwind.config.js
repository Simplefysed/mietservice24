/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f6',
          100: '#dcf2eb',
          200: '#b8e4d7',
          300: '#94d6c3',
          400: '#70c8af',
          500: '#5ca594',
          600: '#4a8a7a',
          700: '#386f60',
          800: '#265446',
          900: '#14392c',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          900: '#0f172a',
        }
      },
    },
  },
  plugins: [],
}
