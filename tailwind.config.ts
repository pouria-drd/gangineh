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
                        DEFAULT: "#2563eb", // Main blue color (primary brand color)
                        "50": "#eff4ff", // Very light blue for backgrounds (soft accents)
                        "100": "#dbe6fe", // Light blue for subtle highlights
                        "200": "#bfd3fe", // Light blue for accents
                        "300": "#93b4fd", // Moderate blue for buttons or links
                        "400": "#6090fa", // Stronger blue for call-to-action elements
                        "500": "#3b76f6", // Base blue for regular UI elements
                        "600": "#2563eb", // Primary blue for main interactive elements
                        "700": "#1d58d8", // Darker blue for focus states or hover effects
                        "800": "#1e4baf", // Deeper blue for borders or strong contrast elements
                        "900": "#1e408a", // Very dark blue for deep contrast elements
                        "950": "#172a54", // Deepest blue for dark background accents
                    },

                    neutral: {
                        "50": "#f6f7f9", // Soft white for background or light sections
                        "100": "#eceef2", // Very light gray for subtle borders or sections
                        "200": "#d5d9e2", // Light gray for secondary sections or borders
                        "300": "#b1bbc8", // Cool gray for headings or secondary elements
                        "400": "#8695aa", // Moderate gray for body text or muted UI elements
                        "500": "#64748b", // Neutral gray for text on light backgrounds
                        "600": "#526077", // Stronger gray for text on darker backgrounds
                        "700": "#434e61", // Deep gray for dark mode text or borders
                        "800": "#3a4252", // Darker gray for dark backgrounds or text
                        "900": "#343a46", // Very dark gray for high contrast text or UI
                        "950": "#23272e", // Deepest gray for dark mode backgrounds or accents
                    },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
