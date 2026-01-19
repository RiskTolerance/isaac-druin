import type { PostMetadata } from '$client/posts/posts';
import { mountains } from '$images';

export const metadata: PostMetadata = {
	title: "My Development Stack",
	slug: "the-stack",
	date: "2025-11-21",
	excerpt: "A look at the tools and technologies I use to build my projects",
	tags: ["Development", "SvelteKit"],
	featuredImage: mountains
};

