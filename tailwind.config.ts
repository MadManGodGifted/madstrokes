import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                terracotta: "#C05746",
                "indigo-dye": "#2E4756",
                ochre: "#D49D42",
                "off-white": "#F7F3E9",
                earth: "#4A3728",
            },
            fontFamily: {
                serif: ["var(--font-serif)", "serif"],
                sans: ["var(--font-sans)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
