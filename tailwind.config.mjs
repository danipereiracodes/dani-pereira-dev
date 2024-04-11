/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary-color': '#000',
				'secondary-color': '#0072ab',
				'dark-background': 'rgb(15 23 42 / 1)',
				'dark-secondary': 'rgba(6, 80, 116, .3)',
				'dark-primary': 'rgb(2 6 23 / 1 )'
			}
		}
	},
	plugins: []
}
