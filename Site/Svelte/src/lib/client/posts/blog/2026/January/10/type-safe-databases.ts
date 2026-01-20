import type { PostMetadata } from '$client/posts/posts';
import { danger } from '$images';

export const metadata: PostMetadata = {
	title: "Type Safe Databases",
	slug: "type-safe-databases",
	date: "2026-01-10",
	excerpt: "Learning to utilize the drizzle-zod package to create complex type-safe databases",
	tags: ["Updates"],
	featuredImage: danger,
	featuredImageMetadata: {
		url: 'https://artvee.com/dl/unconscious-of-danger/',
		artist: 'Seymour Joseph Guy',
		title: 'Unconscious of Danger',
		year: '1865'
	}
};

