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
        night: {
          darker: '#070912',
          deep: '#0c0f1e',
          darker2: '#0a0d15',
        },
        text: {
          primary: '#efe9dd',
          secondary: '#b8b4a8',
        },
        accent: {
          rose: '#d9a9a1',
          gold: '#f0d9a8',
          sage: '#9caf96',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5', filter: 'drop-shadow(0 0 8px rgba(240, 217, 168, 0.5))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 16px rgba(240, 217, 168, 0.8))' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
