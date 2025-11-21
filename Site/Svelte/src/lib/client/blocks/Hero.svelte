<script lang="ts">
	import gsap from 'gsap';

	import { horizontalLoop } from '$client/utils/seamlessLoop';
	import { onMount } from 'svelte';

	const titles = [
		'Full Stack Web Developer',
		'Graphic Designer',
		'UX|UI Nerd',
		'3D Artist',
		'Photographer'
	];

	const tools = [
		'SvelteKit',
		'Illustrator',
		'Photoshop',
		'Blender',
		'Tailwind CSS',
		'Docker',
		'Cloudflare'
	];

	let titlesContainer: HTMLElement;
	let toolsContainer: HTMLElement;

	onMount(() => {
		const titlesTimeline = horizontalLoop(titlesContainer.children);
		const toolsTimeline = horizontalLoop(toolsContainer.children);

		titlesTimeline.play().repeat(-1);
		toolsTimeline.play().repeat(-1);
	});
</script>

<div class="font-display container mx-auto pl-[calc(20%)]">
	<p>Hi! My name is</p>
	<p class="text-5xl">Isaac Druin</p>
	<div class="h-12"></div>
	<p>I am a</p>
	<div bind:this={titlesContainer} class="flex items-center space-x-4">
		{#each titles as title, idx}
			<p class="text-5xl text-nowrap">{title}</p>
			{#if idx < titles.length - 1}
				<p><span class="text-xl">&&</span></p>
			{/if}
		{/each}
	</div>

	<p>using</p>
	<div bind:this={toolsContainer} class="flex items-center gap-4">
		{#each tools as tool, idx}
			<p class="text-5xl text-nowrap">{tool}</p>
			{#if idx < tools.length - 1}
				<p><span class="text-xl">&&</span></p>
			{/if}
		{/each}
	</div>

	<p>to craft</p>
	<p class="text-5xl">Slightly above average web stuff</p>
</div>

<!-- <style>
	p {
		font-size: 3rem;
		text-wrap: nowrap;
		padding-left: 2rem;
	}
	p:not(:has(> span)) {
		font-size: 2rem;
		padding-left: 0rem;
	}
	p > span {
		font-size: 1.5rem;
		vertical-align: middle;
		line-height: 1;
		position: relative;
		top: -0.2em;
		color: #ff3e00;
	}
</style> -->
