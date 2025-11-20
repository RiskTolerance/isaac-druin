// spell-checker: disable
const projectComponents = import.meta.glob(['/src/lib/client/posts/projects/**/*.svelte', '!/src/lib/client/posts/projects/**/_*.svelte'], { eager: true });
const projectMetadata = import.meta.glob(['/src/lib/client/posts/projects/**/*.json', '!/src/lib/client/posts/projects/**/_*.json'], { eager: true, import: 'default' });

export interface ProjectMetadata {
	title: string;
	date?: string;
	excerpt?: string;
	tags?: string[];
	url?: string;
	[key: string]: unknown;
}

export interface ProjectEntry {
	slug: string;
	component: unknown;
	metadata: ProjectMetadata;
}

/**
 * Get all projects by loading .svelte components and their paired .json metadata files.
 * Slug is derived from the file path (e.g., "isaac-druin-dot-com")
 */
export function getAllProjects(): ProjectEntry[] {
	return Object.entries(projectComponents)
		.map(([path, module]) => {

			// Extract slug from path
			const slug = path
				.replace('/src/lib/client/posts/projects/', '')
				.replace(/\.svelte$/, '');

			// Find corresponding metadata file
			const metaPath = path.replace(/\.svelte$/, '.json');
			const metadata = projectMetadata[metaPath] as ProjectMetadata | undefined;

			if (!metadata) {
				throw new Error(`Missing metadata file for ${path}. Expected ${metaPath}`);
			}

			return {
				slug,
				component: (module as { default: unknown }).default,
				metadata
			};
		})
		.filter((project): project is ProjectEntry => project !== null);
}

/**
 * Get a single project by slug
 */
export function getProjectBySlug(slug: string): ProjectEntry | undefined {
	return getAllProjects().find((project) => project.slug === slug);
}

