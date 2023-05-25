/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'bgBody': "url('/src/assets/Royal.jpg')",
			}
		},
		container: {
			padding: {
				DEFAULT: '3rem',
				sm: '2rem',
				lg: '4rem',
				xl: '11rem',
			    '2xl':'13rem',
			},
            },
	},
	plugins: [
		/* */
		/* */
	],
}
