
import type { EntryGenerator, RouteParams, PageLoad } from './$types';
import type { Snippet } from 'svelte';
const posts = import.meta.glob('/src/lib/client/posts/*.svx', { eager: true });

export const entries: EntryGenerator = () => {
	return Object.keys(posts)
		.map((path) => {
			const slug = path.split('/').pop()?.replace('.svx', '');
			return slug ? { slug } : null;
		})
		.filter((entry): entry is RouteParams => entry !== null);
};

export interface PostMetadata {
	title?: string;
	date?: string;
	[key: string]: unknown;
}

export const load: PageLoad = ({ params }) => {
	const postPath = Object.keys(posts).find(
		(path) => path.split('/').pop()?.replace('.svx', '') === params.slug
	);

	if (!postPath) {
		throw new Error(`Post not found: ${params.slug}`);
	}

	const postModule = posts[postPath] as { default: Snippet; metadata?: PostMetadata };

	return {
		post: postModule.default,
		metadata: postModule.metadata
	};
};
