import type { Config } from 'tailwindcss'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config: Config & { corePlugins?: any } = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    preflight: false, // disabled — existing CSS Modules styles must not be reset
  },
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2D6AF6',
          50:  '#EEF3FE',
          100: '#C5D8FC',
          500: '#2D6AF6',
          600: '#1A55D9',
          700: '#1040B2',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out',
        'slide-in': 'slide-in 0.25s ease-out',
      },
    },
  },
  plugins: [],
}

export default config
