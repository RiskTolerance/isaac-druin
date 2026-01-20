import type { PostMetadata } from '$client/posts/posts';
import { scribe } from '$images';

export const metadata: PostMetadata = {
	title: "The CMS Debacle",
	slug: "the-cms-debacle",
	date: "2025-11-23",
	excerpt: "Anyone complaining about the existence of too many frontend frameworks hasn't tried to choose a CMS.",
	tags: ["Development"],
	featuredImage: scribe,
	featuredImageMetadata: {
		url: 'https://artvee.com/dl/the-scribes-office/',
		artist: 'Walter Macewen',
		title: 'The Scribes Office',
		year: '1891'
	}
};

