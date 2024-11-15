/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--primary))',
          light: 'rgb(var(--primary), 0.8)',
          dark: 'rgb(var(--primary), 1.2)'
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary))',
          light: 'rgb(var(--secondary), 0.8)',
          dark: 'rgb(var(--secondary), 1.2)'
        },
        accent: {
          DEFAULT: 'rgb(var(--accent))',
          light: 'rgb(var(--accent), 0.8)',
          dark: 'rgb(var(--accent), 1.2)'
        },
        background: '#F7F9FC',
        card: '#FFFFFF',
        text: {
          primary: '#2D3748',
          secondary: '#4A5568',
          light: '#718096'
        }
      },
      fontFamily: {
        bubble: ['Bubblegum Sans', 'cursive'],
        comic: ['Comic Neue', 'cursive'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 0 15px rgba(0, 0, 0, 0.05), 0 0 4px rgba(0, 0, 0, 0.02)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'dots': 'radial-gradient(rgb(var(--secondary)) 0.5px, transparent 0.5px), radial-gradient(rgb(var(--secondary)) 0.5px, #F7F9FC 0.5px)',
      },
      backgroundSize: {
        'dots': '20px 20px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#2D3748',
            'h1,h2,h3,h4': {
              fontFamily: 'Bubblegum Sans, cursive',
              color: 'rgb(var(--primary))',
              fontWeight: '600',
              lineHeight: '1.3',
            },
            a: {
              color: 'rgb(var(--secondary))',
              '&:hover': {
                color: 'rgb(var(--secondary), 0.8)',
              },
            },
            strong: {
              color: 'rgb(var(--primary))',
              fontWeight: '700',
            },
            blockquote: {
              borderLeftColor: 'rgb(var(--accent))',
              backgroundColor: '#FFFDF6',
              color: '#2D3748',
              fontStyle: 'italic',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
