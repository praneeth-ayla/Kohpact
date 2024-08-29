import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "#7261F3",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "#BB61F3",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "#6199F3",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				white: {
					purple: "#F8F7FF",
				},
				grey: {
					DEFAULT: "#B7B6BF",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			fontFamily: {
				bomstad: ["var(--font-bomstad)"],
				bomstadBlack: ["var(--font-bomstad-black)"],
				sofia: ["var(--font-sofia)"],
			},
			backgroundImage: {
				"custom-gradient-r":
					"linear-gradient(to right, #7261F3, #BB61F3, #6199F3)",
				"custom-gradient-l":
					"linear-gradient(to left, #7261F3, #BB61F3, #6199F3)",
				"custom-gradient-t":
					"linear-gradient(to top, #7261F3, #BB61F3, #6199F3)",
				"custom-gradient-b":
					"linear-gradient(to bottom, #7261F3, #BB61F3, #6199F3)",
				"custom-gradient-tr":
					"linear-gradient(to top right, #7261F3, #BB61F3, #6199F3)",
				"custom-gradient-bl":
					"linear-gradient(to bottom left, #7261F3, #BB61F3, #6199F3)",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				".text-gradient-r": {
					"background-image":
						"linear-gradient(to right, #7261F3, #BB61F3, #6199F3)",
					"background-clip": "text",
					"-webkit-background-clip": "text",
					color: "transparent",
					display: "inline-block",
				},
				".text-gradient-l": {
					"background-image":
						"linear-gradient(to left, #7261F3, #BB61F3, #6199F3)",
					"background-clip": "text",
					"-webkit-background-clip": "text",
					color: "transparent",
					display: "inline-block",
				},
				".text-gradient-t": {
					"background-image":
						"linear-gradient(to top, #7261F3, #BB61F3, #6199F3)",
					"background-clip": "text",
					"-webkit-background-clip": "text",
					color: "transparent",
					display: "inline-block",
				},
				".text-gradient-b": {
					"background-image":
						"linear-gradient(to bottom, #7261F3, #BB61F3, #6199F3)",
					"background-clip": "text",
					"-webkit-background-clip": "text",
					color: "transparent",
					display: "inline-block",
				},
			};
			addUtilities(newUtilities);
		}),
	],
} satisfies Config;

export default config;
