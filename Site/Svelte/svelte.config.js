import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import {enhancedImages} from '@sveltejs/enhanced-img';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(),mdsvex()],
	extensions: ['.svelte', '.svx'],
	kit: {
		adapter: adapter(),
		prerender: {
			crawl: true,
			handleHttpError: 'fail'
		},
	},
	plugins: [enhancedImages()]
};

export default config;
