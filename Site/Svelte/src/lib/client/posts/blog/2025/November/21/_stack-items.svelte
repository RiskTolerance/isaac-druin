<script module lang="ts">
	import {
		sveltekit,
		bun,
		tailwind,
		typescript,
		postgres,
		drizzle,
		sqlite,
		threejs,
		figma,
		groq,
		illustrator,
		photoshop,
		blender,
		gsap as gsapIcon,
		cloudflare,
		docker,
		vercel,
		rive,
		claude,
		mastra,
		cursor
	} from '$images/icons';

	import { Marked } from '$components';

	export const frontend = [
		{
			name: 'SvelteKit',
			shortDescription: 'A full-stack framework for building web applications.',
			icon: sveltekit,
			description: 'something'
		},
		{
			name: 'Typescript',
			shortDescription: 'A superset of JavaScript that adds static typing.',
			icon: typescript,
			description: 'A superset of JavaScript that adds static typing.'
		},
		{
			name: 'TailwindCSS',
			shortDescription: 'A utility-first CSS framework for rapidly building custom designs.',
			icon: tailwind,
			description: 'A utility-first CSS framework for rapidly building custom designs.'
		},
		{
			name: 'Three.js',
			shortDescription: 'A JavaScript library for creating 3D graphics.',
			icon: threejs,
			description: 'A JavaScript library for creating 3D graphics.'
		},
		{
			name: 'GSAP',
			shortDescription: 'A JavaScript library for creating animations.',
			icon: gsapIcon,
			description: 'A JavaScript library for creating animations.'
		}
	];

	export const backend = [
		{
			name: 'SvelteKit',
			shortDescription: 'A full-stack framework for building web applications.',
			icon: sveltekit,
			description: 'A full-stack framework for building web applications.'
		},
		{
			name: 'Bun',
			shortDescription: 'A general purpose JavaScript runtime.',
			icon: bun,
			description: 'A general purpose JavaScript runtime.'
		},
		{
			name: 'Drizzle',
			shortDescription: 'A modern SQL query builder for TypeScript.',
			icon: drizzle,
			description: 'A modern SQL query builder for TypeScript.'
		},
		{
			name: 'SQLite',
			shortDescription: 'A lightweight, open source relational database management system.',
			icon: sqlite,
			description: 'A lightweight, open source relational database management system.'
		},
		{
			name: 'PostgreSQL',
			shortDescription: 'A powerful, open source object-relational database system.',
			icon: postgres,
			description: 'A powerful, open source object-relational database system.'
		},
		{
			name: 'Cloudflare',
			shortDescription: 'A CDN and DNS service.',
			icon: cloudflare,
			description: 'A CDN and DNS service.'
		},
		{
			name: 'Vercel',
			shortDescription: 'A platform for deploying and hosting web applications.',
			icon: vercel,
			description: 'A platform for deploying and hosting web applications.'
		},
		{
			name: 'Docker',
			shortDescription: 'A containerization platform for creating containers.',
			icon: docker,
			description: 'A containerization platform for creating containers.'
		}
	];

	export const design = [
		{
			name: 'Illustrator',
			shortDescription: 'A design tool for creating UI and UX.',
			icon: illustrator,
			description: 'A design tool for creating UI and UX.'
		},
		{
			name: 'Photoshop',
			shortDescription: 'A design tool for creating UI and UX.',
			icon: photoshop,
			description: 'A design tool for creating UI and UX.'
		},
		{
			name: 'Blender',
			shortDescription: 'A design tool for creating UI and UX.',
			icon: blender,
			description: 'A design tool for creating UI and UX.'
		},
		{
			name: 'Figma',
			shortDescription: 'A design tool for creating UI and UX.',
			icon: figma,
			description: 'A design tool for creating UI and UX.'
		},
		{
			name: 'Rive',
			shortDescription: 'A design tool for creating UI and UX.',
			icon: rive,
			description: 'A design tool for creating UI and UX.'
		}
	];

	export const ai = [
		{
			name: 'Claude',
			shortDescription: 'An AI platform for creating AI models.',
			icon: claude,
			description: 'An AI platform for creating AI models.'
		},
		{
			name: 'Groq',
			shortDescription: 'An AI platform for creating AI models.',
			icon: groq,
			description: 'An AI platform for creating AI models.'
		},
		{
			name: 'Cursor',
			shortDescription: 'An AI platform for creating AI models.',
			icon: cursor,
			description: 'An AI platform for creating AI models.'
		},
		{
			name: 'Mastra',
			shortDescription: 'An AI platform for creating AI models.',
			icon: mastra,
			description: 'An AI platform for creating AI models.'
		}
	];
</script>

{#snippet sveltekitDescription()}
	<Marked
		md={`
#### A full-stack framework for building web applications.

		`}
	/>
{/snippet}
