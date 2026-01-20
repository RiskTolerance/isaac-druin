const postComponents = import.meta.glob(['/src/lib/client/posts/blog/**/*.svelte', '!/src/lib/client/posts/blog/**/_*.svelte'], { eager: true });
const postMetadata = import.meta.glob(['/src/lib/client/posts/blog/**/*.ts', '!/src/lib/client/posts/blog/**/_*.ts'], { eager: true });
import type { Picture } from 'vite-imagetools';

export type PostTag = 
	| "AI"
	| "Philosophy"
	| "Development"
	| "Updates"
	| "SvelteKit"
	| "Performance"
	| "Self-Hosted" | "IRL";

export const allPostTags: PostTag[] = ["AI", "Philosophy", "Development", "Updates", "SvelteKit", "Performance", "Self-Hosted", "IRL"];

interface PostMetadataBase {
  title: string;
  date: string;
  slug?: string;
  excerpt?: string;
  tags?: PostTag[];
}

export interface FeaturedImageMetadata {
  url: string;
  artist: string;
	title: string;
	year: string;
}

export interface PostWithFeaturedImage extends PostMetadataBase {
  featuredImage: Picture;
  featuredImageMetadata: FeaturedImageMetadata;
}

export interface PostWithoutFeaturedImage extends PostMetadataBase {
  featuredImage?: never;
  featuredImageDescription?: never;
  featuredImageUrl?: never;
}

export type PostMetadata = PostWithFeaturedImage | PostWithoutFeaturedImage;

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

