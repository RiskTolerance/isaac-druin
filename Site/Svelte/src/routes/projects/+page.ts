import type { PageLoad } from './$types';
import { getAllProjects } from '$client/posts/projects';

export const load: PageLoad = () => {
	const projects = getAllProjects();

	// Sort by date (newest first) if date exists, otherwise by title
	projects.sort((a, b) => {
		if (a.metadata.date && b.metadata.date) {
			const dateA = new Date(a.metadata.date).getTime();
			const dateB = new Date(b.metadata.date).getTime();
			return dateB - dateA;
		}
		return a.metadata.title.localeCompare(b.metadata.title);
	});

	return {
		projects: projects.map((project) => ({
			slug: project.slug,
			metadata: project.metadata
		}))
	};
};

