<script lang="ts">
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { SplitText } from 'gsap/SplitText';
	import { onMount } from 'svelte';
	gsap.registerPlugin(ScrollTrigger, SplitText);

	import FullStackWebDeveloper from '$client/components/gsap/home/Hero.svelte';

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
</script>
