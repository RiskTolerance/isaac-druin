import type { LayoutLoad } from './$types';
import { getPostBySlug } from '$client/posts/posts';
import { error } from '@sveltejs/kit';

export const load: LayoutLoad = ({ params }) => {
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

