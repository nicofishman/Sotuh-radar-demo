/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,tsx,astro}'],
    theme: {
        extend: {
            colors: {
                'dark-green': '#03332b',
                card: {
                    DEFAULT: '#fc4c02',
                    'light-orange': '#E95420',
                    yellow: '#EFB73E'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            },
            backgroundImage: {
                'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))'
            }
        }
    },
    plugins: []
};
