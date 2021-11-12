module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                overlay: "rgba(0,0,0,0.5)",
            },
            minWidth: {
                33:"33.333%"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
