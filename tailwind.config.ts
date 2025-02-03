import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        extend: {
            screens: {
                xs: "475px",
            },

            fontFamily: {
                bjn: "BNazanin",
                yekanX: "IRANYekanX",
                peyda: "PeydaWebFaNum",
            },

            colors: {
                drd: {
                    primary: {
                        DEFAULT: "#64974b",
                        "50": "#f2f7ee",
                        "100": "#e1eed9",
                        "200": "#c7deb8",
                        "300": "#a3c88e",
                        "400": "#82b269",
                        "500": "#64974b",
                        "600": "#4a7337",
                        "700": "#3d5c2f",
                        "800": "#334b29",
                        "900": "#2e4126",
                        "950": "#152211",
                    },

                    neutral: {
                        50: "#f7f8f8",
                        100: "#edeef1",
                        200: "#d8dbdf",
                        300: "#b6bac3",
                        400: "#8e95a2",
                        500: "#6b7280",
                        600: "#5b616e",
                        700: "#4a4e5a",
                        800: "#40444c",
                        900: "#383a42",
                        950: "#25272c",
                    },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
