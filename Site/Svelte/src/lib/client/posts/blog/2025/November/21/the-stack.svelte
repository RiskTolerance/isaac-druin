<!-- spell-checker: disable -->
<script lang="ts">
	import { Prose, Marked, Note } from '$components';
	import { Image } from '$blocks';
	import { mountains } from '$images';
	import SkillCard from './_SkillCard.svelte';
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
		gsap,
		cloudflare,
		docker,
		vercel,
		rive,
		claude,
		mastra,
		cursor
	} from '$images/icons';
	import { X } from '@lucide/svelte';

	const frontend = [
		{
			name: 'SvelteKit',
			shortDescription: 'A full-stack framework for building web applications.',
			icon: sveltekit
		},
		{
			name: 'Typescript',
			shortDescription: 'A superset of JavaScript that adds static typing.',
			icon: typescript
		},
		{
			name: 'TailwindCSS',
			shortDescription: 'A utility-first CSS framework for rapidly building custom designs.',
			icon: tailwind
		},
		{
			name: 'Three.js',
			shortDescription: 'A JavaScript library for creating 3D graphics.',
			icon: threejs
		},
		{
			name: 'GSAP',
			shortDescription: 'A JavaScript library for creating animations.',
			icon: gsap
		}
	];

	const backend = [
		{
			name: 'SvelteKit',
			shortDescription: 'A full-stack framework for building web applications.',
			icon: sveltekit
		},
		{
			name: 'Bun',
			shortDescription: 'A general purpose JavaScript runtime.',
			icon: bun
		},
		{
			name: 'Drizzle',
			shortDescription: 'A modern SQL query builder for TypeScript.',
			icon: drizzle
		},
		{
			name: 'SQLite',
			shortDescription: 'A lightweight, open source relational database management system.',
			icon: sqlite
		},
		{
			name: 'PostgreSQL',
			shortDescription: 'A powerful, open source object-relational database system.',
			icon: postgres
		},
		{
			name: 'Cloudflare',
			shortDescription: 'A CDN and DNS service.',
			icon: cloudflare
		},
		{
			name: 'Vercel',
			shortDescription: 'A platform for deploying and hosting web applications.',
			icon: vercel
		},
		{
			name: 'Docker',
			shortDescription: 'A containerization platform for creating containers.',
			icon: docker
		}
	];

	const design = [
		{
			name: 'Illustrator',
			shortDescription: 'A design tool for creating UI and UX.',
			icon: illustrator
		},
		{
			name: 'Photoshop',
			shortDescription: 'A design tool for creating UI and UX.',
			icon: photoshop
		},
		{
			name: 'Blender',
			shortDescription: 'A design tool for creating UI and UX.',
			icon: blender
		},
		{
			name: 'Figma',
			shortDescription: 'A design tool for creating UI and UX.',
			icon: figma
		},
		{
			name: 'Rive',
			shortDescription: 'A design tool for creating UI and UX.',
			icon: rive
		}
	];

	const ai = [
		{
			name: 'Claude',
			shortDescription: 'An AI platform for creating AI models.',
			icon: claude
		},
		{
			name: 'Groq',
			shortDescription: 'An AI platform for creating AI models.',
			icon: groq
		},
		{
			name: 'Cursor',
			shortDescription: 'An AI platform for creating AI models.',
			icon: cursor
		},
		{
			name: 'Mastra',
			shortDescription: 'An AI platform for creating AI models.',
			icon: mastra
		}
	];

	let expandedSkill: HTMLElement;
	let expandedSkillBackdrop: HTMLElement;
	let innerHeight: number = $state(0);

	const getTopOrBottom = (e: MouseEvent) => {
		const y = e.clientY;
		return y > innerHeight / 2 ? 'bottom' : 'top';
	};

	const openExpandedSkill = (e: MouseEvent) => {
		expandedSkill.style.display = 'block';
		expandedSkillBackdrop.style.display = 'block';
	};
</script>

<svelte:window bind:innerHeight />

<Image src={mountains} alt="this is an image!" class="h-[25vh] w-full object-cover  md:h-[50vh]" />

<Prose
	class="-mt[12.5vh] relative z-10 mx-auto max-w-3xl bg-neutral-50 md:-mt-[25vh] md:p-8 dark:bg-neutral-950"
>
	<Marked
		md={`
## What is a "stack"?

In the software development world, a "stack" is a collection of technologies that are used to create a project. Usually, developers with a specific focus will have a static stack which they find suits their needs the best. The stack is a preference. 

The stack isn't set in stone, sometimes parts of it will change depending on the project requirements. The client may need a thing that the stack doesn't support, and parts of the stack will need to change. Or the client has their own stack that they prefer and the developer is forced to adapt ("adaptation" on that scale usually sucks and goes hand in hand with frustration and slower development). 

## There Are Many Like It, But This One Is Mine

Developers (likey wihout exception) have their own stack that's independant of employment or client imposed requirements. Rather than plaster technologies all over my home page, I'm going to let my ego-fueled preferences live here in this post. 

My stack is the best. If you use something else you're wrong and you should feel bad.

Jokes aside, here are the tools and technologies I use to build my projects. I'm going to group them into four categories:

- **Development**: Further broken into **Frontend** and **Backend**. These are frameworks and libraries (code-level tools).
- **Design**: design software
- **AI**: AI tools and platforms
- **Other**: other tools and technologies

You will notice that a few items are listed twice (SvelteKit, for example). These items are general purpose to the point they fit both categories.
	`}
	/>
	<Note>
		<p class="prose prose-sm max-w-full text-gray-400!">
			After almost no deliberation, I've decided to leave out any technologies that I would consider
			as foundational to modern web development. HTML, CSS, JavaScript, Vite, and Nodejs all meet
			this criteria. If you don't know or use these, you're probably not reading this post (or
			you're my mom - hi mom!).
		</p>
	</Note>
	<Marked
		md={`
## Development Stack

### Frontend

The "frontend" is the part of the application that the user sees and interacts with. It's the UI and the user experience.
`}
	/>
	<div class="grid grid-cols-2 gap-4">
		{#each frontend as skill}
			<SkillCard {...skill} onClick={openExpandedSkill} />
		{/each}
	</div>

	<Marked
		md={`
### Backend

The "backend" is the part of the application that the user doesn't see and doesn't interact with. It's the server-side logic and the data.
`}
	/>
	<div class="grid grid-cols-2 gap-4">
		{#each backend as skill}
			<SkillCard {...skill} onClick={openExpandedSkill} />
		{/each}
	</div>
	<Marked
		md={`
## Design

The "design" is the part of the application that the user sees and interacts with. It's the UI and the user experience.
	`}
	/>
	<div class="grid grid-cols-2 gap-4">
		{#each design as skill}
			<SkillCard {...skill} onClick={openExpandedSkill} />
		{/each}
	</div>

	<Marked
		md={`
## AI

The "AI" is the part of the application that the user sees and interacts with. It's the UI and the user experience.
	`}
	/>
	<div class="grid grid-cols-2 gap-4">
		{#each ai as skill}
			<SkillCard {...skill} onClick={openExpandedSkill} />
		{/each}
	</div>
</Prose>

<div
	id="expanded-skill"
	bind:this={expandedSkill}
	class="fixed top-12 left-1/2 z-20 flex h-[80vh] w-[90vw] max-w-3xl -translate-x-1/2 flex-col overflow-y-scroll bg-amber-300 p-4 md:h-[50vh] md:p-8"
>
	<div class="absolute top-0 right-0 flex h-12 w-12 items-center justify-center">
		<X
			class="h-8 w-8 text-white"
			onclick={() => {
				expandedSkill.style.display = 'none';
			}}
		/>
	</div>
	<div class="mx-auto mb-4 flex h-24 w-full bg-gray-500">
		<div id="expanded-skill-image" class="mr-4 aspect-square h-full bg-red-500"></div>
		<div class="flex h-full w-full flex-col gap-2 bg-blue-400 p-2">
			<div id="expanded-skill-name" class="h-1/2 w-full bg-red-400">hi</div>
			<div id="expanded-skill-short-description" class="h-1/2 w-full bg-red-400"></div>
		</div>
	</div>
	<div
		id="expanded-skill-description"
		class="prose mx-auto flex w-full max-w-full justify-center bg-green-400"
	>
		hi
	</div>
</div>

<button
	bind:this={expandedSkillBackdrop}
	id="expanded-skill-backdrop"
	class="fixed top-0 right-0 bottom-0 left-0 z-10 bg-black/50"
	onclick={() => {
		expandedSkill.style.display = 'none';
		expandedSkillBackdrop.style.display = 'none';
	}}
	aria-label="Close expanded skill"
></button>
