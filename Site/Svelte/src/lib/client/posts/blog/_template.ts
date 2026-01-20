import type { PostMetadata } from '$client/posts/posts';
import { mountains } from '$images';

export const metadata: PostMetadata = {
	title: "Hello, World!",
	date: "2025-11-15",
	slug: "hello-world!",
	excerpt: "We're Back, Baby - or - A Series of Unfortunate Events - or - A Summary of the Last Five Years",
	tags: ["Updates"],
	featuredImage: mountains,
	featuredImageMetadata: {
		url: 'https://artvee.com/dl/mountains/',
		artist: 'John Martin',
		title: 'Mountains',
		year: '1821'
	}
};

