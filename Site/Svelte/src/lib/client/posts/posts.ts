const postComponents = import.meta.glob(['/src/lib/client/posts/blog/**/*.svelte', '!/src/lib/client/posts/blog/**/_*.svelte'], { eager: true });
const postMetadata = import.meta.glob(['/src/lib/client/posts/blog/**/*.ts', '!/src/lib/client/posts/blog/**/_*.ts'], { eager: true });
import type { Picture } from 'vite-imagetools';
export interface PostMetadata {
	title: string;
	date: string;
	slug?: string;
	excerpt?: string;
	tags?: string[];
	featuredImage?: Picture;
	[key: string]: unknown;
}

export interface PostEntry {
	slug: string;
	component: unknown;
	metadata: PostMetadata;
}

/**
 * Get all blog posts by loading .svelte components and their paired .ts metadata files.
 * Slug is derived from metadata.slug if provided, otherwise from the filename (e.g., "the-stack")
 */
export function getAllPosts(): PostEntry[] {
	return Object.entries(postComponents)
		.map(([path, module]) => {
			// Find corresponding metadata file
			const metaPath = path.replace(/\.svelte$/, '.ts');
			const metadataModule = postMetadata[metaPath] as { metadata: PostMetadata } | undefined;

			if (!metadataModule || !metadataModule.metadata) {
				throw new Error(`Missing metadata file for ${path}. Expected ${metaPath} with exported 'metadata'`);
			}

			const metadata = metadataModule.metadata;

			// Use explicit slug from metadata if provided, otherwise extract from filename
			const slug = metadata.slug || path
				.replace('/src/lib/client/posts/blog/', '')
				.replace(/\.svelte$/, '')
				.split('/')
				.pop() || '';

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

