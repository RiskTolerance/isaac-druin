import type { ProjectMetadata } from '$client/posts/projects';
import { mountains } from '$images';

export const metadata: ProjectMetadata = {
	title: "This Site (The One You're On)",
	slug: "isaac-druin-dot-com",
	date: "2024-01-15",
	excerpt: "A personal website built with constraints: optimized for performance, running on minimal hardware, with zero ongoing costs.",
	tags: ["sveltekit", "performance", "self-hosted"],
	url: "https://isaacdruin.com",
	featuredImage: mountains
};

