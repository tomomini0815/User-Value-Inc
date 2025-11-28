/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', '"Noto Sans JP"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        display: ['"Syne"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      colors: {
        brand: {
          black: '#050505',
          dark: '#0a0a0a',
          gray: '#141414',
          lightGray: '#2a2a2a',
          accent: '#6366f1',
          gold: '#d4af37',
          surface: '#0f0f0f'
        }
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'aurora': 'aurora 60s linear infinite',
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
