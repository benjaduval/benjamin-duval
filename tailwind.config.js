/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#06060a',
          900: '#0B0B0F',
          800: '#111118',
          700: '#17171F',
          600: '#1E1E28',
          500: '#2A2A36',
        },
        accent: {
          DEFAULT: '#6C63FF',
          light: '#8B83FF',
          dark: '#5046E5',
        },
        cyan: {
          DEFAULT: '#00D9FF',
          light: '#33E1FF',
          dark: '#00B8D9',
        },
        muted: '#8888A0',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(135deg, #6C63FF 0%, #00D9FF 100%)',
        'gradient-accent-reverse': 'linear-gradient(135deg, #00D9FF 0%, #6C63FF 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
