import adapter from 'svelte-adapter-bun';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
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
			'$project': './src/lib/client/projects',
			'$blog': './src/lib/client/blog',
			'$server': './src/lib/server',
			'$remotes': './src/lib/remotes',
			'$layouts': './src/lib/client/layouts',
			'$css': './src/lib/css',
		}
	},
	compilerOptions: {
		// experimental.async disabled due to bug with nested layouts + $app/state
		// See: https://github.com/sveltejs/kit/issues/14798
		warningFilter: (warning) => {
			if (warning.code === 'state_referenced_locally') return false;
			return true;
		}
	}
};

export default config;
