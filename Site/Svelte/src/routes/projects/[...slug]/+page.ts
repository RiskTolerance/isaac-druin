import type { EntryGenerator } from './$types';
import { getAllProjects } from '$client/posts/projects';

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

