/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,tsx,astro}', './node_modules/tw-elements/dist/js/**/*.js'],
    theme: {
        extend: {
            colors: {
                'dark-green': '#03332b',
                primary: {
                    orange: '#fc4c02',
                    green: '#80dfa6',
                    'dark-green': '#13322b',
                    white: '#fff'
                },
                secondary: {
                    white: '#fff',
                    aqua: '#d2f2f2',
                    cream: '#fdf1be',
                    rose: '#fec9b3',
                    'light-green': '#d9f5e4',
                    gray: '#868686',
                    teal: '#6ad2d2',
                    yellow: '#f9d026',
                    red: '#ff3400'
                },
                navbar: '#04332b'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            },
            backgroundImage: {
                'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))',
                overview: 'url(/bgSouth.png)'
            }
        }
    },
    plugins: [
        require('tw-elements/dist/plugin')
    ]
};
