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
