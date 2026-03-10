import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        display: ['DM Serif Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        void: '#060810',
        surface: '#0b0f1a',
        cyan: {
          neon: '#00d4ff',
          glow: '#00ffc8',
        },
        violet: {
          soft: '#a78bfa',
        },
      },
      backgroundImage: {
        'grad-cyan': 'linear-gradient(135deg, #00d4ff 0%, #00ffc8 100%)',
        'grad-violet': 'linear-gradient(135deg, #a78bfa 0%, #00d4ff 100%)',
        'btn-shine': 'linear-gradient(90deg, #00d4ff 0%, #00ffc8 50%, #00d4ff 100%)',
        'hero-glow': 'radial-gradient(ellipse 90% 50% at 50% -5%, rgba(0,212,255,0.08) 0%, transparent 70%)',
        'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)',
      },
      animation: {
        'float-badge': 'floatBadge 5s ease-in-out infinite',
        'float-badge-slow': 'floatBadge 6s ease-in-out 1.5s infinite',
        'scroll-x': 'scrollX 25s linear infinite',
        'pulse-green': 'pulseGreen 2s ease-in-out infinite',
        'shine': 'shine 0.5s ease forwards',
      },
      keyframes: {
        floatBadge: {
          '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        scrollX: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        pulseGreen: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      boxShadow: {
        'cyan-glow': '0 0 30px rgba(0,212,255,0.2), 0 0 60px rgba(0,212,255,0.08)',
        'cyan-intense': '0 0 20px rgba(0,212,255,0.4)',
        'card-hover': '0 12px 40px rgba(0,212,255,0.12)',
      },
    },
  },
  plugins: [],
}
export default config
