<script lang="ts">
	import gsap from 'gsap';

	import { onMount } from 'svelte';
	import { derived } from 'svelte/store';
	import { flip } from 'svelte/animate';

	const titlesArr = [
		'Full Stack Web Developer',
		'Graphic Designer',
		'UX|UI Nerd',
		'3D Artist',
		'Photographer'
	];

	const toolsArr = [
		'SvelteKit',
		'Illustrator',
		'Photoshop',
		'Blender',
		'Tailwind CSS',
		'Docker',
		'Cloudflare'
	];

	let container: HTMLElement;
	let titles: HTMLElement;
	let tools: HTMLElement;
</script>

<svelte:window />

<div class="font-display container mx-auto">
	<p>Hi! My name is</p>
	<p class="text-5xl">Isaac Druin</p>
	<div class="h-12"></div>
	<p>I am a</p>
	<div class="aspect-video w-full overflow-clip border-2 border-red-500" bind:this={container}>
		<div class="flex" bind:this={titles}>
			{#each titlesArr as title}
				<p class="w-fit text-5xl font-bold text-nowrap">{title}</p>
			{/each}
		</div>
		<p>using</p>
		<div class="flex" bind:this={tools}>
			{#each toolsArr as tool}
				<p class="w-fit text-5xl font-bold text-nowrap">{tool}</p>
			{/each}
		</div>
	</div>

	<p>to craft</p>
	<p class="text-5xl">Slightly above average web stuff</p>
</div>
