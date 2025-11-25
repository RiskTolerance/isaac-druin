import type { LayoutLoad } from './$types';
import { getProjectBySlug } from '$client/posts/projects';
import { error } from '@sveltejs/kit';

export const load: LayoutLoad = ({ params }) => {
	// For catch-all routes, params.slug is an array, join it back to a string
	const slug = Array.isArray(params.slug) ? params.slug.join('/') : String(params.slug);
	const project = getProjectBySlug(slug);

	if (!project) {
		throw error(404, `Project not found: ${slug}`);
	}

	return {
		component: project.component,
		metadata: project.metadata
	};
};

