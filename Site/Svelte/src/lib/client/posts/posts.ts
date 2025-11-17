const postComponents = import.meta.glob('/src/lib/client/posts/blog/**/*.svelte', { eager: true });
const postMetadata = import.meta.glob('/src/lib/client/posts/blog/**/*.json', { eager: true, import: 'default' });

export interface PostMetadata {
	title: string;
	date: string;
	excerpt?: string;
	tags?: string[];
	[key: string]: unknown;
}

export interface PostEntry {
	slug: string;
	component: unknown;
	metadata: PostMetadata;
}

/**
 * Get all blog posts by loading .svelte components and their paired .json metadata files.
 * Slug is derived from the file path (e.g., "2025/January/1-12-25")
 */
export function getAllPosts(): PostEntry[] {
	return Object.entries(postComponents)
		.map(([path, module]) => {
			// Extract slug from path: /src/lib/client/posts/blog/2025/January/1-12-25.svelte -> 2025/January/1-12-25
			const slug = path
				.replace('/src/lib/client/posts/blog/', '')
				.replace(/\.svelte$/, '');

			// Find corresponding metadata file
			const metaPath = path.replace(/\.svelte$/, '.json');
			const metadata = postMetadata[metaPath] as PostMetadata | undefined;

			if (!metadata) {
				throw new Error(`Missing metadata file for ${path}. Expected ${metaPath}`);
			}

			return {
				slug,
				component: (module as { default: unknown }).default,
				metadata
			};
		})
		.filter((post): post is PostEntry => post !== null);
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): PostEntry | undefined {
	return getAllPosts().find((post) => post.slug === slug);
}

