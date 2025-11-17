export const prerender = true;

import type { EntryGenerator, PageLoad } from './$types';
import { getAllPosts, getPostBySlug } from '$client/posts/posts';
import { error } from '@sveltejs/kit';
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

export const load: PageLoad = ({ params }) => {
	// For catch-all routes, params.slug is an array, join it back to a string
	const slug = Array.isArray(params.slug) ? params.slug.join('/') : String(params.slug);
	const post = getPostBySlug(slug);

	if (!post) {
		throw error(404, `Post not found: ${slug}`);
	}

	return {
		component: post.component,
		metadata: post.metadata
	};
};
