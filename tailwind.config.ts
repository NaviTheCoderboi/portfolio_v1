import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontSize: {
                "title-mobile": "2.2rem",
                "title-md": "5rem",
                "section-title-md": "4rem",
                "section-title-mobile": "2rem",
            },
        },
    },
    plugins: [],
};
export default config;
