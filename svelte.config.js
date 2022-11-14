import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import nesting from 'postcss-nesting';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [
		preprocess({
			postcss: {
				plugins: [nesting()]
			}
		})
	]
};

export default config;
