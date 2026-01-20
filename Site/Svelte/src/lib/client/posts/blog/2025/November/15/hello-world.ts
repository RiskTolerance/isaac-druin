import type { PostMetadata } from '$client/posts/posts';
import { greeting } from '$images';

export const metadata: PostMetadata = {
	title: "Hello, World!",
	slug: "hello-world",
	date: "2025-11-15",
	excerpt: "We're Back, Baby - or - A Series of Unfortunate Events - or - A Summary of the Last Five Years",
	tags: ["Updates"],
	featuredImage: greeting,
	featuredImageMetadata: {
		url: 'https://artvee.com/dl/greeting-krakow/',
		artist: 'January Suchodolski',
		title: 'Greeting Kraków',
		year: '1842'
	}
};

