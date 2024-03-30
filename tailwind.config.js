/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        secondary: '#F1F3FF',
        banner: '#0D28A6',
        button: '#5CB85F',
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'h1': ['36px', {
          lineHeight: '54px',
          fontWeight: '700',
        }],
        'h2': ['24px', {
          lineHeight: '36px',
          fontWeight: '700',
        }],
        'plight': ['14px', {
          lineHeight: '20px',
          fontWeight: '300',
        }],
        'preg': ['14px', {
          lineHeight: '20px',
          fontWeight: '600',
        }],
        'title': ['16px', {
          lineHeight: '24px',
          fontWeight: '700',
        }],
        'button': ['14px', {
          lineHeight: '20px',
          fontWeight: '700',
        }],
      }
    },
  },
  plugins: [],
}

