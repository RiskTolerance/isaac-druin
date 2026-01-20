<!-- spell-checker: disable -->
<script lang="ts">
	import { Prose, Marked, Note } from '$components';
	import SkillCard from './_SkillCard.svelte';

	import {
		framework,
		backendCommon,
		infrastructure,
		backendCustom,
		design,
		ai
	} from './_stack-items.svelte';
	import { gsap } from 'gsap';
	// @ts-ignore - GSAP types have casing inconsistency on Windows (flip.d.ts vs Flip.d.ts)
	import { Flip } from 'gsap/Flip';
	import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	// ScrollSmoother requires ScrollTrigger
	import { ScrollSmoother } from 'gsap/ScrollSmoother';
	import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
	import { SplitText } from 'gsap/SplitText';
	import { TextPlugin } from 'gsap/TextPlugin';

	gsap.registerPlugin(
		DrawSVGPlugin,
		Flip,
		ScrollTrigger,
		ScrollSmoother,
		ScrollToPlugin,
		SplitText,
		TextPlugin
	);
	import { X } from '@lucide/svelte';

	let expandedSkill: HTMLElement;
	let expandedSkillBackdrop: HTMLElement;
	let innerHeight: number = $state(0);
	let scrollY: number = $state(0);

	// Cache expanded skill slots (they never change)
	let iconSlot: HTMLElement;
	let nameSlot: HTMLElement;
	let descriptionSlot: HTMLElement;
	let longDescriptionSlot: HTMLElement;

	// Store references for reverse animation
	let originalCard: HTMLElement | null = $state(null);
	let skillElements: {
		icon: HTMLElement;
		heading: HTMLElement;
		description: HTMLElement;
		longDescription: HTMLElement;
	} | null = $state(null);

	const hideExpandedSkill = () => {
		expandedSkill.style.display = 'none';
		expandedSkillBackdrop.style.display = 'none';
	};

	const openExpandedSkill = (e: MouseEvent) => {
		const clickedElement = (e.target as HTMLElement).closest('button') as HTMLElement;
		if (!clickedElement) return;

		// Cache expanded skill slots on first use
		if (!iconSlot) {
			iconSlot = expandedSkill.querySelector('#expanded-skill-image') as HTMLElement;
			nameSlot = expandedSkill.querySelector('#expanded-skill-name') as HTMLElement;
			descriptionSlot = expandedSkill.querySelector(
				'#expanded-skill-short-description'
			) as HTMLElement;
			longDescriptionSlot = expandedSkill.querySelector(
				'#expanded-skill-long-description'
			) as HTMLElement;
		}

		// Get skill card elements
		const heading = clickedElement.querySelector('.skill-name') as HTMLElement;
		const description = clickedElement.querySelector('.skill-short-description') as HTMLElement;
		const longDescription = clickedElement.querySelector('.skill-long-description') as HTMLElement;
		const icon = clickedElement.querySelector('.skill-icon') as HTMLElement;

		// Store element array for reuse
		const elements = [icon, heading, description, longDescription];

		// Calculate positions
		const isClickingFromTop = e.clientY < innerHeight / 2;
		const clickedElementY = clickedElement.getBoundingClientRect().top + scrollY;
		const scrollOffset = (innerHeight / 4) * (isClickingFromTop ? 1 : 3);

		// Capture and preserve the clicked element's height to prevent collapse
		clickedElement.style.height = `${clickedElement.offsetHeight}px`;

		// Capture initial state before DOM changes
		gsap.set(elements, { clearProps: 'transition' });
		const skillItemState = Flip.getState(elements);

		// Position and show expanded container
		expandedSkill.style.top = isClickingFromTop ? 'auto' : '48px';
		expandedSkill.style.bottom = isClickingFromTop ? '48px' : 'auto';
		expandedSkill.style.opacity = '0';
		expandedSkill.style.display = 'block';

		// Store references for reverse animation
		originalCard = clickedElement;
		skillElements = { icon, heading, description, longDescription };

		// Set z-index and show long description
		gsap.set(elements, { zIndex: '100' });
		longDescription.classList.remove('hidden');

		// Move elements to new positions
		iconSlot.appendChild(icon);
		nameSlot.appendChild(heading);
		descriptionSlot.appendChild(description);
		longDescriptionSlot.appendChild(longDescription);

		// Build and play animation timeline
		const tl = gsap.timeline({ paused: true });

		tl.to(window, {
			scrollTo: { y: clickedElementY, offsetY: scrollOffset },
			duration: 0.2,
			ease: 'power2.inOut'
		});

		tl.to(expandedSkill, { opacity: 1, duration: 0.3 }, '<');

		tl.add(
			Flip.from(skillItemState, {
				duration: 0.5,
				ease: 'power2.inOut'
			}),
			'<'
		);

		tl.play().then(() => {
			expandedSkillBackdrop.style.display = 'block';
		});
	};

	const closeExpandedSkill = () => {
		if (!originalCard || !skillElements) {
			hideExpandedSkill();
			return;
		}

		const { icon, heading, description, longDescription } = skillElements;
		const animatedElements = [icon, heading, description];

		// Hide longDescription before moving it back (no animation needed)
		longDescription.classList.add('hidden');

		// Get current state before moving elements back (exclude longDescription from animation)
		gsap.set(animatedElements, { clearProps: 'transition' });
		const currentState = Flip.getState(animatedElements);

		// Find original card containers (elements were moved, so find by structure)
		const cardContainer = originalCard.querySelector('div.flex') as HTMLElement;
		const proseContainer = originalCard.querySelector('div.prose') as HTMLElement;

		// Move elements back to original positions
		cardContainer.insertBefore(icon, cardContainer.firstChild);
		proseContainer.insertBefore(heading, proseContainer.firstChild || null);
		proseContainer.appendChild(description);
		proseContainer.appendChild(longDescription);

		// Build reverse animation timeline
		const tl = gsap.timeline({ paused: true });

		tl.to(expandedSkill, { opacity: 0, duration: 0.3 });
		tl.add(
			Flip.from(currentState, {
				duration: 0.5,
				ease: 'power2.inOut'
			}),
			'<'
		);
		tl.call(() => {
			hideExpandedSkill();
			originalCard!.style.height = '';
			originalCard = null;
			skillElements = null;
		});

		tl.play().then(() => {
			gsap.set([icon, heading, description, longDescription], { zIndex: '0' });
		});
	};
</script>

<svelte:window bind:innerHeight bind:scrollY />

<Prose
	class="-mt[12.5vh] dark:bg-brandGreen-800 relative z-10 mx-auto max-w-3xl bg-neutral-50 p-4 md:-mt-[25vh] md:p-8"
>
	<Marked
		md={`
## What is a "stack"?

In the software development world, a "stack" is a collection of technologies that are used to create a project. Usually, developers with a specific focus will have a static stack which they find suits their needs the best. The stack is a preference. 

The stack isn't set in stone, sometimes parts of it will change depending on the project requirements. The client may need a thing that the stack doesn't support, and parts of the stack will need to change. Or the client has their own stack that they prefer and the developer is forced to adapt ("adaptation" on that scale usually sucks and goes hand in hand with frustration and slower development). 

## There Are Many Like It, But This One Is Mine

Developers (likey wihout exception) have their own stack that's independant of employment or client imposed requirements. Rather than plaster technologies all over my home page, I'm going to let my ego-fueled preferences live here in this post. 

My stack is the best. If you use something else you're wrong and you should feel bad.

Jokes aside, here are the tools and technologies I use to build my projects. I organize my stack into two main sections:

- **Common Stack**: The foundational technologies I use across all projects, broken into Framework, Backend, and Infrastructure layers.
- **Custom Application Stack Extension**: Additional backend dependencies I add when building business logic and operational software.

I also use design tools and AI platforms, which I'll cover separately.
	`}
	/>
	<Note>
		<p class="prose prose-sm max-w-full text-gray-400!">
			I've decided to leave out any technologies that I would consider as foundational to modern web
			development. HTML, CSS, and JavaScript all meet this criteria. If you don't know or use these,
			you're probably not reading this post (or you're my mom - hi mom!).
		</p>
	</Note>
	<Marked
		md={`
## Common Stack

The common stack represents the foundational technologies I use across all projects. These are organized into three layers: Framework, Backend, and Infrastructure.

### Framework

The framework layer includes the core libraries and tools for building the application frontend and handling common development tasks.
`}
	/>
	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
		{#each framework as skill}
			<SkillCard {...skill} onClick={openExpandedSkill} />
		{/each}
	</div>

	<Marked
		md={`
### Backend

The backend layer covers runtime, database, storage, and essential services that power the application.
`}
	/>
	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
		{#each backendCommon as skill}
			<SkillCard {...skill} onClick={openExpandedSkill} />
		{/each}
	</div>

	<Marked
		md={`
### Infrastructure

The infrastructure layer includes hosting, deployment, CI/CD, and content delivery services.
`}
	/>
	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
		{#each infrastructure as skill}
			<SkillCard {...skill} onClick={openExpandedSkill} />
		{/each}
	</div>

	<Marked
		md={`
## Custom Application Stack Extension

For business logic, operational software, and anything requiring purpose-built interfaces, I extend the common stack with additional backend dependencies.
`}
	/>
	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
		{#each backendCustom as skill}
			<SkillCard {...skill} onClick={openExpandedSkill} />
		{/each}
	</div>
	<Marked
		md={`
## Design

Tools to build out the visual identity of a site, both during pre-production (designing the site) and production (implementing a design)
	`}
	/>
	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
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
	<div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
		{#each ai as skill}
			<SkillCard {...skill} onClick={openExpandedSkill} />
		{/each}
	</div>
</Prose>

<div
	id="expanded-skill"
	bind:this={expandedSkill}
	class="fixed left-1/2 z-20 flex w-[90vw] max-w-4xl -translate-x-1/2 flex-col bg-black p-4 outline outline-gray-300 md:p-8"
	style="display: none; opacity: 0;"
>
	<div class="absolute top-0 right-0 flex h-12 w-12 items-center justify-center">
		<X class="h-8 w-8 cursor-pointer text-white" onclick={closeExpandedSkill} />
	</div>
	<div class="mx-auto mb-4 flex h-24 w-full">
		<div
			id="expanded-skill-image"
			class="mr-4 flex aspect-square h-full items-center justify-center"
		></div>
		<div class="flex h-full w-full flex-col gap-2 p-2">
			<div id="expanded-skill-name" class="flex h-1/2 w-full"></div>
			<div id="expanded-skill-short-description" class="h-1/2 w-full"></div>
		</div>
	</div>
	<div id="expanded-skill-long-description" class="prose mx-auto flex justify-center"></div>
</div>

<button
	bind:this={expandedSkillBackdrop}
	id="expanded-skill-backdrop"
	class="fixed top-0 right-0 bottom-0 left-0 z-10 bg-black/50"
	style="display: none;"
	onclick={closeExpandedSkill}
	aria-label="Close expanded skill"
></button>
