<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { SplitText } from 'gsap/SplitText';
	import { onMount } from 'svelte';
	gsap.registerPlugin(ScrollTrigger, SplitText);

	import FullStackWebDeveloper from '$components/gsap/home/FullStackWebDeveloper.svelte';

	const titlesArr = [
		'Full Stack Web Developer',
		'Graphic Designer',
		'UX|UI Nerd',
		'3D Artist',
		'Photographer'
	];

	const toolsArr = [
		'SvelteKit',
		'Tailwind CSS',
		'GSAP',
		'Threejs',
		'Blender',
		'Illustrator',
		'Photoshop'
	];

	let container: HTMLElement;
	let titles: HTMLElement;
	let tools: HTMLElement;

	let fullStackTimeline: gsap.core.Timeline = $state(gsap.timeline());

	// Store element refs in an array - access by index or create a Map for named access
	let titleEls: HTMLElement[] = [];

	onMount(() => {
		const titlesTl = gsap.timeline({
			repeat: -1
		});

		titleEls.forEach((el, i) => {
			const split = SplitText.create(el, { type: 'words, chars' });

			// First title fades in from invisible
			if (i === 0) {
				titlesTl.from(split.chars, {
					duration: 0.5,
					y: 100,
					autoAlpha: 0,
					stagger: 0.05
				});
			} else {
				titlesTl.from(split.chars, {
					duration: 0.5,
					y: 100,
					stagger: 0.05
				});
			}
			titlesTl.to(
				split.chars,
				{
					duration: 0.5,
					y: -100,
					stagger: 0.05
				},
				'+=1.5'
			);
		});
	});
</script>

<div class="font-display container mx-auto">
	<FullStackWebDeveloper timeline={fullStackTimeline} />
	<p>Hi! My name is</p>
	<p class="text-5xl">Isaac Druin</p>
	<div class="h-12"></div>
	<p>I am a</p>
	<div class="aspect-video w-full overflow-clip border-2 border-red-500" bind:this={container}>
		<div class="relative h-20 w-full overflow-clip bg-red-500 py-2" bind:this={titles}>
			{#each titlesArr as title, i}
				<p
					class="absolute left-1/2 -translate-x-1/2 text-6xl font-bold text-nowrap"
					bind:this={titleEls[i]}
				>
					{title}
				</p>
			{/each}
		</div>
		<p>using</p>
		<div class="grid grid-cols-2 gap-8" bind:this={tools}>
			{#each toolsArr as tool}
				<p class="w-fit text-5xl font-bold text-nowrap">{tool}</p>
			{/each}
		</div>
	</div>

	<p>to craft</p>
	<p class="text-5xl">Slightly above average web stuff</p>
</div>
