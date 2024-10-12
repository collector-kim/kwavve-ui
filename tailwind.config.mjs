/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			  'maven-pro': ['"Maven Pro Variable"', 'sans-serif'],
			  'harmattan': ['"Harmattan"', 'sans-serif'],
			},
		  },
	},
	plugins: [],
	prefix: 'tw-'
}
