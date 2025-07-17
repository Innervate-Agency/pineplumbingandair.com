/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable dark mode using class names
  theme: {
    extend: {
      colors: {
        // Custom color palette
        primary: {
          50: '#f0f9f5',
          100: '#dcf0e7',
          200: '#bce0d2',
          300: '#8fc9b4',
          400: '#5ea085',
          500: '#3d8b69',
          600: '#2d6e52',
          700: '#255943',
          800: '#1f4735',
          900: '#1a3c2d',
        },
        secondary: {
          50: '#fef7f0',
          100: '#fdeadc',
          200: '#fad4b8',
          300: '#f6b689',
          400: '#f18f58',
          500: '#ed7133',
          600: '#de5928',
          700: '#b84424',
          800: '#923625',
          900: '#762f22',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        emergency: {
          50: '#fef9e3',
          100: '#fef0c1',
          200: '#fde390',
          300: '#fbcf56',
          400: '#f9b932',
          500: '#ea9d1e',
          600: '#c37d1a',
          700: '#9c621c',
          800: '#7e511c',
          900: '#442a0c',
        },
        sage: {
          50: '#f8f9f6',
          100: '#f0f2eb',
          200: '#e1e6d8',
          300: '#cbd3be',
          400: '#b0bc9f',
          500: '#95a182',
          600: '#7a8568',
          700: '#626a54',
          800: '#505746',
          900: '#43493b',
        },
        earth: {
          50: '#f7f6f4',
          100: '#efede8',
          200: '#ddd9d0',
          300: '#c7c0b3',
          400: '#aca294',
          500: '#96887a',
          600: '#88796b',
          700: '#72655a',
          800: '#5e544c',
          900: '#4e453f',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'Menlo', 'monospace'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 