import adapter from 'svelte-adapter-bun';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [mdsvex(),vitePreprocess()],
	extensions: ['.svelte', '.svx'],
	kit: {
		adapter: adapter({
			precompress: true,
			strict: true
		}),
		prerender: {
			crawl: true,
			handleHttpError: 'fail'
		},
		alias: {
			'$client': './src/lib/client',
			'$blocks': './src/lib/client/blocks',
			'$components': './src/lib/client/components',
			'$images': './src/lib/client/images',
			'$posts': './src/lib/client/posts',
			'$projects': './src/lib/client/projects',
			'$server': './src/lib/server',
			'$remotes': './src/lib/remotes',
		}
	}
};

export default config;
