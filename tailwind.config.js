/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FAFAF8',
          warm: '#F5F2EC',
          muted: '#EDE9E1',
        },
        ink: {
          DEFAULT: '#0F172A',
          soft: '#334155',
          muted: '#64748B',
        },
        brand: {
          DEFAULT: '#1E3A5F',
          light: '#2D5A87',
          accent: '#C4A962',
          glow: '#E8D5A3',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          elevated: '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 2px 40px -12px rgba(15, 23, 42, 0.12)',
        card: '0 4px 24px -4px rgba(15, 23, 42, 0.08)',
        float: '0 24px 80px -24px rgba(15, 23, 42, 0.18)',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
        'border-beam': 'border-beam 8s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 2rem))' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(calc(-100% - 2rem))' },
          to: { transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'border-beam': {
          '100%': { 'offset-distance': '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'mesh-light':
          'radial-gradient(at 40% 20%, rgba(196,169,98,0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(45,90,135,0.08) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(196,169,98,0.06) 0px, transparent 50%)',
      },
    },
  },
  plugins: [],
}
