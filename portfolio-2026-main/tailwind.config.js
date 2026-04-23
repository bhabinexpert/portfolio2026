/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      colors: {
        dark: {
          900: '#030711',
          800: '#060d1e',
          700: '#0c1530',
          600: '#121d40',
        },
        // Primary — indigo (replaces purple-violet)
        violet: {
          300: '#c7d2fe',
          400: '#a5b4fc',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        // Secondary — teal (replaces electric cyan)
        cyan: {
          300: '#99f6e4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
      },
      animation: {
        float:       'float 6s ease-in-out infinite',
        'pulse-glow':'pulseGlow 2.5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'slide-up':  'slideUp 0.6s ease-out',
        'fade-in':   'fadeIn 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 18px rgba(99, 102, 241, 0.25)' },
          '50%':      { boxShadow: '0 0 36px rgba(99, 102, 241, 0.55), 0 0 72px rgba(99, 102, 241, 0.2)' },
        },
        slideUp: {
          from: { transform: 'translateY(30px)', opacity: '0' },
          to:   { transform: 'translateY(0)',    opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
      backgroundSize: {
        '400%': '400% 400%',
        '200%': '200% auto',
      },
    },
  },
  plugins: [],
}
