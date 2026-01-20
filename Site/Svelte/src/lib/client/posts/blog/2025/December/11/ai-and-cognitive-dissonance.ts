import type { PostMetadata } from '$client/posts/posts';
import { hydra } from '$images';

export const metadata: PostMetadata = {
	title: "AI and Cognitive Dissonance",
	date: "2025-12-11",
	slug: "ai-and-cognitive-dissonance",
	excerpt: "Exploring how AI forces individuals to align their values with their actions (and thinking about the consequences).",
	tags: ["AI", "Philosophy"],
	featuredImage: hydra,
	featuredImageMetadata: {
		url: 'https://artvee.com/dl/hercules-and-the-lernaean-hydra/',
		artist: 'Gustave Moreau',
		title: 'Hercules and The Lernaean Hydra',
		year: '1875'
	}
};