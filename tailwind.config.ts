import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				body: "var(--body)",
				gunmetal: "var(--gunmetal)",
				khaki: "var(--khaki)",
				charcoal: "var(--charcoal)",
			},
			fontFamily: {
				cinzel: "var(--font-cinzel)",
				maven: "var(--font-maven)",
			},
		},
	},
	plugins: [],
};
export default config;
