/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Emo-themed color palette
        'emo-black': '#0a0a0a',
        'emo-dark': '#1a1a1a',
        'emo-gray': '#2a2a2a',
        'emo-purple': {
          50: '#f3e8ff',
          100: '#e9d5ff',
          200: '#d8b4fe',
          300: '#c084fc',
          400: '#a855f7',
          500: '#9333ea',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        'emo-pink': {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        'emo-red': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        'neon-green': '#39ff14',
        'neon-blue': '#1b03a3',
        'neon-pink': '#ff073a',
      },
      fontFamily: {
        'emo': ['Courier New', 'monospace'],
        'scene': ['Impact', 'Arial Black', 'sans-serif'],
        'gothic': ['var(--font-creepster)', 'cursive'],
      },
      backgroundImage: {
        'gradient-emo': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)',
        'gradient-neon': 'linear-gradient(45deg, #9333ea, #ec4899, #ef4444)',
        'gradient-scene': 'linear-gradient(90deg, #000000, #4c1d95, #000000)',
      },
      animation: {
        'pulse-neon': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flicker': 'flicker 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter: 'drop-shadow(0 0 1px currentColor) drop-shadow(0 0 15px currentColor) drop-shadow(0 0 1px currentColor)',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          }
        },
        glow: {
          'from': {
            textShadow: '0 0 20px #9333ea, 0 0 30px #9333ea, 0 0 40px #9333ea',
          },
          'to': {
            textShadow: '0 0 10px #ec4899, 0 0 20px #ec4899, 0 0 30px #ec4899',
          }
        }
      },
      boxShadow: {
        'neon': '0 0 5px currentColor, 0 0 20px currentColor, 0 0 35px currentColor, 0 0 50px currentColor',
        'emo': '0 4px 14px 0 rgba(0, 0, 0, 0.39)',
      }
    },
  },
  plugins: [],
}
