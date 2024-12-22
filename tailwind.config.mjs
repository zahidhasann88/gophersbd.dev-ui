/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				oswald: 'Oswald, sans-serif',
				mono: '"JetBrains Mono", monospace'
			},
			boxShadow: {
				sponsor: '12px 12px #2d5d73'
			}
		},
	},
	plugins: [],
}
