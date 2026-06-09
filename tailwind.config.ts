import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#111417',
          900: '#1a1f24',
        },
        brand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
        },
        ember: {
          400: '#fb923c',
          500: '#f97316',
        },
      },
      boxShadow: {
        soft: '0 18px 60px rgba(17, 20, 23, 0.10)',
        glow: '0 18px 60px rgba(20, 184, 166, 0.22)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -18px, 0)' },
        },
        pulseRing: {
          '0%': { opacity: '0.3', transform: 'scale(0.92)' },
          '70%': { opacity: '0.05', transform: 'scale(1.08)' },
          '100%': { opacity: '0.3', transform: 'scale(0.92)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        pulseRing: 'pulseRing 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
