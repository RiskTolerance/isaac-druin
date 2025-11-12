import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [mdsvex(),vitePreprocess()],
	extensions: ['.svelte', '.svx'],
	kit: {
		adapter: adapter(),
		prerender: {
			crawl: true,
			handleHttpError: 'fail'
		},
	}
};

export default config;
