/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                arctic: "#F7FAFF",
                fog: "#EEF3FF",
                drift: "#E6EEFF",
                violet: "#EEE9FF",
                ink: "#3F4A7A",
                shadow: "#6A72B8",
                sun: "#FFF5C2",
            },
            fontFamily: {
                serif: ["Cormorant Garamond", "serif"],
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
