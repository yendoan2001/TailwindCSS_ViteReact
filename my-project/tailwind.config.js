/** @type {import('tailwindcss').Config} */
export default {
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
    plugins: [
    ],
}
