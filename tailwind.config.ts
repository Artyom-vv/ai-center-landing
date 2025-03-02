import type {Config} from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./screens/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            "xl": "1440px",
            "md": "768px",
            "sm": "360px",
        },
        container: {
            screens: {
                "xl": "1440px",
                "md": "768px",
                "sm": "360px",
            },
            center: true,
            padding: {
                "xl": "80px",
                "md": "68px",
                "sm": "16px",
            }
        }
    },
} satisfies Config;
