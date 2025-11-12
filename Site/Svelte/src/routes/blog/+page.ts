import type { PageLoad } from './$types';

const posts = import.meta.glob('/src/lib/posts/*.svx', { eager: true });

export interface PostMetadata {
	title: string;
	date?: string;
	[key: string]: unknown;
}

export interface BlogPost {
	slug: string;
	metadata: PostMetadata;
}

export const load: PageLoad = () => {
	const blogPosts: BlogPost[] = Object.entries(posts).map(([path, module]) => {
		const slug = path.split('/').pop()?.replace('.svx', '') ?? '';
		const postModule = module as { metadata?: PostMetadata };
		
		return {
			slug,
			metadata: postModule.metadata ?? { title: slug }
		};
	});

	// Sort by date (newest first) if date exists
	blogPosts.sort((a, b) => {
		const dateA = a.metadata.date ? new Date(a.metadata.date).getTime() : 0;
		const dateB = b.metadata.date ? new Date(b.metadata.date).getTime() : 0;
		return dateB - dateA;
	});

	return {
		posts: blogPosts
	};
};

