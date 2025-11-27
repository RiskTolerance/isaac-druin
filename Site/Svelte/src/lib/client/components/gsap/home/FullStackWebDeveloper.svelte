<script lang="ts">
	import { gsap } from 'gsap';
	import { SplitText } from 'gsap/SplitText';
	import { onMount } from 'svelte';
	let { timeline }: { timeline: gsap.core.Timeline } = $props();

	let text: HTMLElement;

	onMount(() => {
		const splitText = SplitText.create(text, { type: 'chars' });

		splitText.chars.forEach((char) => {
			console.log(char);
			char.classList.add('cursor', 'relative');
		});

		gsap.set(splitText.chars, { autoAlpha: 0 });
		// .from() animates FROM these values TO the current state
		// autoAlpha: 0 means "start invisible, end visible"
		timeline.to(splitText.chars, {
			autoAlpha: 1,
			duration: 0,
			stagger: 0.12
		});
	});
</script>

<div class="flex h-[25vh] w-full items-center justify-center bg-slate-800">
	<p bind:this={text} class="text-brandGray-50 font-mono text-5xl">"Full Stack Web Developer"</p>
</div>

<style>
	:global(.cursor::after) {
		content: '';
		position: absolute;
		display: inline-block;
		width: 5px;
		height: 1.2em;
		background-color: white;
		top: -0.1em;
		right: 0;
	}
</style>
