import type { EntryGenerator, PageLoad } from './$types';
import { getAllProjects, getProjectBySlug } from '$client/posts/projects';
import { error } from '@sveltejs/kit';

export const entries: EntryGenerator = () => {
	const projects = getAllProjects();
	return projects
		.filter((project) => project.slug && typeof project.slug === 'string')
		.map((project) => {
			// For catch-all routes, return slug as string path
			// SvelteKit will handle the array conversion internally
			return {
				slug: String(project.slug)
			};
		});
};

export const load: PageLoad = ({ params }) => {
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

