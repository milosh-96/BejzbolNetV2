/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './**/*.{razor,html,cshtml}',
        './wwwroot/**/*.js',
    ],
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1B4332',
                accent: '#F5F3E7',
                secondary: '#B33F2A',
                highlight: '#D9A441',
                text: '#2B2B2B',
            },
        },
    },
}