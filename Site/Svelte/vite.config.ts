import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import lucidePreprocess from "vite-plugin-lucide-preprocess";

export default defineConfig(({ mode }) => ({
	plugins: [
		lucidePreprocess(),
		tailwindcss(),
		sveltekit(),
		mode === 'production' && enhancedImages()
	],
}));
