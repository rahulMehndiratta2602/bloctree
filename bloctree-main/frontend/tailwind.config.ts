import type { Config } from 'tailwindcss';
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
    mode: 'jit', // Ensure JIT mode is enabled
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            sans: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
            helvetica: "Helvetica Neue"
        },

        fontSize: {
            xs: '1.3rem',
            sm: '1.4rem',
            md: '1.6rem',
            nm: '1.7rem',
            lg: ['2.2rem', '1.3'],
            xl: ['3.2rem', '3.8rem'],
            '5xl': ['8rem', '1'],
        },
        spacing: {
            0: '0',
            1: '0.4rem',
            2: '0.8rem',
            3: '1.2rem',
            4: '1.6rem',
            5: '2.0rem',
            6: '2.4rem',
            7: '2.8rem',
            8: '3.2rem',
            9: '3.6rem',
            10: '4rem',
            11: '4.4rem',
            12: '4.8rem',
        },

        boxShadow: {
            primary: 'rgb(80 63 205 / 50%) 0px 1px 40px',
        },
        extend: {
            screens: {
                xs: '576px',
                // => @media (min-width: 992px) { ... }
            },
            backgroundImage: {
                'primary-gradient':
                    'linear-gradient(92.88deg, #455eb5 9.16%, #5643cc 43.89%, #673fd7 64.72%);',
                'page-gradient':
                    'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, .3), transparent);',
                'secondary-gradient-background': 
                    'linear-gradient(125deg, #5f9ea0, #4682b4);',
                'secondary-gradient-background-vertical':
                    'linear-gradient(0deg, #5f9ea0, #4682b4);',
                "radial-faded":
                    "radial-gradient(circle at bottom center,var(--color),transparent 70%)",
            },
            colors: {
                background: '#000212',
                white: '#fff',
                grey: '#858699',
                'white-a08': 'rgba(255,255,255,0.08)',
            },
            keyframes: {
                moveLeftRight: {
                  '0%, 100%': { transform: 'translateX(-2rem)' },
                  '50%': { transform: 'translateX(2rem)' },
                },
                moveRightLeft: {
                  '0%, 100%': { transform: 'translateX(2rem)' },
                  '50%': { transform: 'translateX(-2rem)' },
                }
            },
            animation: {
                moveLeftRight: 'moveLeftRight 3s ease-in-out infinite',
                moveRightLeft: 'moveRightLeft 3s ease-in-out infinite'
            },
        },
    },

    plugins: [
        addVariablesForColors,
      ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );
   
    addBase({
      ":root": newVars,
    });
}

export default config;
