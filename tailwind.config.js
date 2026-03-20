/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d0d0d',
        surface: '#141414',
        card: '#1a1a1a',
        border: '#252525',
        accent: '#00ff88',
        'accent-dim': '#00cc6a',
        'accent-glow': 'rgba(0,255,136,0.15)',
        amber: '#f5a623',
        'text-main': '#f0f0ea',
        'text-dim': '#777',
        'text-muted': '#444',
      },
      fontFamily: {
        sans: ['"Cabinet Grotesk"', 'sans-serif'],
      },
      fontSize: {
        heading: '30px',
        title: '20px',
        subtitle: '16px',
        description: '14px',
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '64px 64px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease both',
        'fade-in': 'fadeIn 0.5s ease both',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'blink': 'blink 2s ease infinite',
        'shimmer': 'shimmer 2s ease infinite',
        'slide-right': 'slideRight 0.6s ease both',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(0,255,136,0.15)',
        'glow-lg': '0 0 80px rgba(0,255,136,0.12)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 48px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}
