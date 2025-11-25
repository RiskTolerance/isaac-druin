import type { EntryGenerator } from './$types';
import { getAllPosts } from '$client/posts/posts';

export const entries: EntryGenerator = () => {
	const posts = getAllPosts();
	return posts
		.filter((post) => post.slug && typeof post.slug === 'string')
		.map((post) => {
			// For catch-all routes, return slug as string path
			// SvelteKit will handle the array conversion internally
			return {
				slug: String(post.slug)
			};
		});
};

