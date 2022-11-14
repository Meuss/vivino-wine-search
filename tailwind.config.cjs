/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '2rem'
			},
			screens: {
				lg: { max: '1400px' },
				md: { max: '1023px' },
				sm: { max: '767px' },
				xs: { max: '480px' }
			},
			fontFamily: {
				sans: ['Avenir', 'sans-serif']
			},
			colors: {
				darkblue: '#0D1222'
			}
		}
	},
	plugins: []
};
