/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                space: '#5c6ac6'
            }
        },
    },
    plugins: [],
}
