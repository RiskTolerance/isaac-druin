import type { PostMetadata } from '$client/posts/posts';
import { danger } from '$images';

export const metadata: PostMetadata = {
	title: "Full Stack Type Safety",
	slug: "full-stack-type-safety",
	date: "2026-01-10",
	excerpt: "Learning to utilize the drizzle-zod package to create complex type-safe databases",
	tags: ["Development", "Self-Hosted"],
	featuredImage: danger,
	featuredImageMetadata: {
		url: 'https://artvee.com/dl/unconscious-of-danger/',
		artist: 'Seymour Joseph Guy',
		title: 'Unconscious of Danger',
		year: '1865'
	}
};

