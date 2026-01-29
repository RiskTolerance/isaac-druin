export const prerender = true

import type { PageLoad } from './$types'
import { getAllPosts } from '$client/posts/posts'

export const load: PageLoad = () => {
	const posts = getAllPosts()

	// Sort by date (newest first)
	const sortedPosts = posts.sort((a, b) => {
		const dateA = new Date(a.metadata.date).getTime()
		const dateB = new Date(b.metadata.date).getTime()
		return dateB - dateA
	})

	return {
		posts: sortedPosts.map((post) => ({
			slug: post.slug,
			metadata: post.metadata
		}))
	}
};

