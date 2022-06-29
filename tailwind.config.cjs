/** @type {import('tailwindcss').Config} */

// const production = !process.env.ROLLUP_WATCH;

module.exports = {
    // future: {
    //     purgeLayersByDefault: true,
    //     removeDeprecatedGapUtilities: true,
    // },
    // purge: {
    //     content: ["./src/**/*.svelte"],
    //     enabled: production, // disable purge in dev
    // },
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        colors: {
            lavender: {
                100: "#e7dff3",
                200: "#d7caeb",
                300: "#c7b5e3",
                400: "#bba5dd",
                DEFAULT: "#af95d7",
                600: "#a88dd3",
                700: "#9f82cd",
                800: "#9678c7",
                900: "#8667be",
            },
            peach: {
                100: "#f6e5dc",
                200: "#f0d4c5",
                300: "#e9c3ad",
                400: "#e5b69c",
                DEFAULT: "#e0a98a",
                600: "#dca282",
                700: "#d89877",
                800: "#d38f6d",
                900: "#cb7e5a",
            },
            eucalyptus: {
                100: "#d7e1e4",
                200: "#bccdd2",
                300: "#a1b9bf",
                400: "#8caab2",
                DEFAULT: "#789ba4",
                600: "#70939c",
                700: "#658992",
                800: "#5b7f89",
                900: "#486d78",
            },
            raspberry: {
                100: "#f2dde0",
                200: "#eac6cb",
                300: "#e1afb6",
                400: "#da9da7",
                DEFAULT: "#d48c97",
                600: "#cf848f",
                700: "#c97984",
                800: "#c36f7a",
                900: "#b95c69",
            },
            periwinkle: {
                100: '#dde2ee',
                200: '#c6cfe3',
                300: '#afbcd7',
                400: '#9dadcf',
                DEFAULT: '#8c9fc6',
                600: '#8497c0',
                700: '#798db9',
                800: '#6f83b1',
                900: '#5c72a4',
            }
        },
        fontFamily: {
            sans: ["Josefin Sans", "sans-serif"],
            serif: ["Playfair Display", "serif"],
        },
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#af95d7",
                    secondary: "#ceadc8",
                    accent: "#ecc5b0",
                    neutral: "#fffff0",
                    "base-100": "#f5f2ed",
                    info: "#8c9fc6",
                    success: "#789ba4",
                    warning: "#e0a98a",
                    error: "#d48c97",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
