/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        'text-secondary': 'var(--color-textSecondary)',
        border: 'var(--color-border)',
        gold: {
          50: '#fffdf0',
          100: '#fefce8',
          200: '#fef9c3',
          300: '#fef08a',
          400: '#fde047',
          500: '#facc15',
          600: '#eab308',
          700: '#ca8a04',
          800: '#a16207',
          900: '#854d0e',
          950: '#713f12',
        },
        luxury: {
          50: '#fdfaf7',
          100: '#faf5f0',
          200: '#f3e8dc',
          300: '#ead4c0',
          400: '#deb89a',
          500: '#d4a574',
          600: '#c19660',
          700: '#a67c52',
          800: '#8b6239',
          900: '#73512e',
          950: '#5c3d1f',
        }
      },
      fontFamily: {
        'display': ['Avenir', 'Playfair Display', 'serif'],
        'body': ['PT Sans', 'Inter', 'system-ui', 'sans-serif'],
        'avenir': ['Avenir', 'sans-serif'],
        'pt-sans': ['PT Sans', 'sans-serif'],
      },
      animation: {
        'float-gold': 'float-gold 8s ease-in-out infinite',
        'float-diamond': 'float-diamond 10s ease-in-out infinite',
        'float-kundan': 'float-kundan 9s ease-in-out infinite',
        'float-silver': 'float-silver 11s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
      },
      keyframes: {
        'float-gold': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(10px, -10px) rotate(120deg)' },
          '66%': { transform: 'translate(-10px, 10px) rotate(240deg)' },
        },
        'float-diamond': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '25%': { transform: 'translate(15px, -5px) rotate(90deg) scale(1.1)' },
          '50%': { transform: 'translate(-5px, 15px) rotate(180deg) scale(1)' },
          '75%': { transform: 'translate(-15px, -5px) rotate(270deg) scale(1.1)' },
        },
        'float-kundan': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(8px, -8px) rotate(45deg)' },
          '50%': { transform: 'translate(-8px, 8px) rotate(90deg)' },
          '75%': { transform: 'translate(-8px, -8px) rotate(135deg)' },
        },
        'float-silver': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)' },
          '20%': { transform: 'translate(12px, -6px) rotate(72deg) scale(1.05)' },
          '40%': { transform: 'translate(-6px, 12px) rotate(144deg) scale(1)' },
          '60%': { transform: 'translate(-12px, -6px) rotate(216deg) scale(1.05)' },
          '80%': { transform: 'translate(6px, -12px) rotate(288deg) scale(1)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #d4af37, #f4e4bc, #d4af37)',
        'hero-gradient': 'linear-gradient(135deg, #faf8f3 0%, #fff9e6 50%, #faf0e6 100%)',
        'collection-gradient': 'linear-gradient(135deg, #fff9e6 0%, #faf8f3 100%)',
      },
      boxShadow: {
        'gold-glow': '0 8px 25px rgba(212, 175, 55, 0.3)',
        'gold-glow-hover': '0 12px 35px rgba(212, 175, 55, 0.4)',
        'luxury': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'luxury-hover': '0 16px 48px rgba(212, 175, 55, 0.15)',
      },
    },
  },
  plugins: [],
}
