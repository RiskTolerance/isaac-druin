<!-- spell-checker: disable -->
<script lang="ts">
	import { Prose, Marked, Note } from '$components';
	import { Image } from '$blocks';
	import { mountains } from '$images';
	import SkillCard from './_SkillCard.svelte';

	import { frontend, backend, design, ai } from './_stack-items.svelte';
	import { gsap } from 'gsap';
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

	// Store references for reverse animation
	let originalCard: HTMLElement | null = $state(null);
	let skillElements: { icon: HTMLElement; heading: HTMLElement; description: HTMLElement } | null =
		$state(null);

	const openExpandedSkill = (e: MouseEvent) => {
		const clickedElement = (e.target as HTMLElement).closest('button') as HTMLElement;
		if (!clickedElement) return;

		// Get skill card elements
		const heading = clickedElement.querySelector('.skill-name') as HTMLElement | null;
		const description = clickedElement.querySelector(
			'.skill-short-description'
		) as HTMLElement | null;
		const icon = clickedElement.querySelector('.skill-icon') as HTMLElement | null;
		if (!icon || !heading || !description) return;

		// Get target slots in expanded view
		const iconSlot = expandedSkill.querySelector('#expanded-skill-image');
		const nameSlot = expandedSkill.querySelector('#expanded-skill-name');
		const descriptionSlot = expandedSkill.querySelector('#expanded-skill-short-description');
		if (!iconSlot || !nameSlot || !descriptionSlot) return;

		// Calculate positions
		const isClickingFromTop = e.clientY < innerHeight / 2;
		const clickedElementY = clickedElement.getBoundingClientRect().top + scrollY;
		const scrollOffset = isClickingFromTop ? innerHeight / 4 : (innerHeight / 4) * 3;

		// Capture initial state before DOM changes
		gsap.set([icon, heading, description], { clearProps: 'transition' });
		const skillItemState = Flip.getState([icon, heading, description]);

		// Position and show expanded container
		expandedSkill.style.top = isClickingFromTop ? 'auto' : '48px';
		expandedSkill.style.bottom = isClickingFromTop ? '48px' : 'auto';
		expandedSkill.style.opacity = '0';
		expandedSkill.style.display = 'block';

		// Store references for reverse animation
		originalCard = clickedElement;
		skillElements = { icon, heading, description };

		// assign new z values
		icon.style.zIndex = '100';
		heading.style.zIndex = '100';
		description.style.zIndex = '100';

		// Move elements to new positions
		iconSlot.appendChild(icon);
		nameSlot.appendChild(heading);
		descriptionSlot.appendChild(description);

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
			expandedSkill.style.display = 'none';
			expandedSkillBackdrop.style.display = 'none';
			return;
		}

		const { icon, heading, description } = skillElements;

		// Get current state before moving elements back
		gsap.set([icon, heading, description], { clearProps: 'transition' });
		const currentState = Flip.getState([icon, heading, description]);

		// Find original card containers (elements were moved, so find by structure)
		const cardContainer = originalCard.querySelector('div.flex'); // The main flex container
		const proseContainer = originalCard.querySelector('div.prose'); // The prose container for text

		if (!cardContainer || !proseContainer) {
			expandedSkill.style.display = 'none';
			expandedSkillBackdrop.style.display = 'none';
			return;
		}

		// return original z values

		// Move elements back to original positions (icon first, then prose content)
		cardContainer.insertBefore(icon, cardContainer.firstChild);
		proseContainer.insertBefore(heading, proseContainer.firstChild || null);
		proseContainer.appendChild(description);

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
			expandedSkill.style.display = 'none';
			expandedSkillBackdrop.style.display = 'none';
			originalCard = null;
			skillElements = null;
		});

		tl.play().then(() => {
			icon.style.zIndex = '0';
			heading.style.zIndex = '0';
			description.style.zIndex = '0';
		});
	};
</script>

<svelte:window bind:innerHeight bind:scrollY />

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
	<div class="grid grid-cols-2 gap-8">
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
	<div class="grid grid-cols-2 gap-8">
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
	<div class="grid grid-cols-2 gap-8">
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
	<div class="grid grid-cols-2 gap-8">
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
		<X class="h-8 w-8 text-white" onclick={closeExpandedSkill} />
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
	<div id="expanded-skill-description" class="prose mx-auto flex w-full max-w-full justify-center">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vitae similique dolorem dicta
			quas? Aspernatur, fugiat! Dolore, eaque blanditiis fuga reprehenderit porro consectetur totam
			veniam inventore pariatur suscipit laboriosam minus dicta cupiditate, recusandae odio modi
			corrupti repellendus ea debitis ad. Quas dolorum, tempore velit quae vel eaque nam? Vero
			eligendi esse, ipsam porro dolores saepe eum velit, reprehenderit maiores commodi consequatur
			dignissimos veniam soluta, adipisci officia doloribus recusandae ut! Cumque aperiam magnam
			atque debitis reiciendis consequuntur provident suscipit natus corrupti?
		</p>
	</div>
</div>

<button
	bind:this={expandedSkillBackdrop}
	id="expanded-skill-backdrop"
	class="fixed top-0 right-0 bottom-0 left-0 z-10 bg-black/50"
	style="display: none;"
	onclick={closeExpandedSkill}
	aria-label="Close expanded skill"
></button>
