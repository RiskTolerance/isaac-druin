<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { SplitText } from 'gsap/SplitText';
	import { Flip } from 'gsap/Flip';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(SplitText, Flip, ScrollTrigger);
	import { GraphicDesigner, UiUxNerd, Photographer } from '$components';

	// const titlesArr = [
	// 	'Full Stack Web Developer',
	// 	'Graphic Designer',
	// 	'UX|UI Nerd',
	// 	'3D Artist',
	// 	'Photographer'
	// ];

	// const toolsArr = [
	// 	'SvelteKit',
	// 	'Tailwind CSS',
	// 	'GSAP',
	// 	'Threejs',
	// 	'Blender',
	// 	'Illustrator',
	// 	'Photoshop'
	// ];

	// vars
	let containerWidth = $state(0);
	// text width is determined by a css calc for the text size based on the
	let textWidth = $state(0);
	let baseFontSize = $derived((containerWidth / 27) * 1.5);

	// gsap junk - initialize timelines immediately
	let masterTimeline: GSAPTimeline = $state(gsap.timeline({ paused: true }));
	let fullStackTimeline: GSAPTimeline = $state(gsap.timeline());
	let graphicDesignerTimeline: GSAPTimeline = $state(gsap.timeline());
	let uxuiTimeline: GSAPTimeline = $state(gsap.timeline());
	let photographerTimeline: GSAPTimeline = $state(gsap.timeline());

	let text: HTMLElement | undefined = $state();
	let cursor: HTMLElement | undefined = $state();
	let scrollTriggerInstance: ScrollTrigger | undefined;

	onMount(() => {
		if (!cursor || !text) {
			return new Error('DOM elements not available');
		}

		const splitText = SplitText.create(text, { type: 'chars', reduceWhiteSpace: false });
		splitText.chars.forEach((char, i) => {
			fullStackTimeline.from(
				char,
				{
					autoAlpha: 0,
					duration: 0.15,
					onStart: () => {
						// Safety check: ensure elements still exist before manipulating
						if (!cursor || !char || !cursor.parentNode) return;
						const charState = Flip.getState(cursor);
						char.appendChild(cursor);
						Flip.from(charState, {
							duration: 0.01
						});
					},
					onComplete: () => {
						// Safety check: ensure cursor still exists
						if (!cursor) return;
						if (i === 0) {
							cursor.classList.remove('hidden');
						}
						if (i === splitText.chars.length - 1) {
							cursor.classList.add('hidden');
						}
					}
				},
				i * 0.15
			);
		});

		// Add all timelines to master timeline in sequence
		masterTimeline
			.add(fullStackTimeline)
			.add(graphicDesignerTimeline)
			.add(uxuiTimeline)
			.add(photographerTimeline);

		// ONE ScrollTrigger controls the entire sequence
		scrollTriggerInstance = ScrollTrigger.create({
			trigger: '#hero',
			animation: masterTimeline,
			pin: true,
			scrub: 1,
			start: 'top top',
			end: '+=8000', // Adjust based on total timeline duration
			anticipatePin: 1
		});
	});

	// Cleanup: kill all GSAP animations AND ScrollTrigger when component is destroyed
	onDestroy(() => {
		scrollTriggerInstance?.kill();
		masterTimeline.kill();
		fullStackTimeline.kill();
		graphicDesignerTimeline.kill();
		uxuiTimeline.kill();
		photographerTimeline.kill();
	});
</script>

<div id="hero" class="container mx-auto space-y-6 overflow-x-clip select-none md:space-y-2">
	<div bind:clientWidth={containerWidth} class="flex w-full items-center justify-center">
		<div
			bind:this={cursor}
			class=" text-brandGreen-300! font-code absolute top-0 left-4 hidden font-bold"
		>
			|
		</div>
		<p
			bind:clientWidth={textWidth}
			bind:this={text}
			style="font-size: {baseFontSize}px;"
			class=" text-brandGreen-50! font-code font-light"
		>
			<span>const</span>&nbsp;titles<span>:</span>&nbsp;string[]&nbsp;<span>=&nbsp;[</span><br
			/><span>"</span><span class="custom font-bold">Full&nbsp;Stack&nbspWeb&nbspDeveloper</span
			><span>",</span>
		</p>
	</div>

	<GraphicDesigner timeline={graphicDesignerTimeline} {containerWidth} {textWidth} {baseFontSize}
	></GraphicDesigner>

	<UiUxNerd timeline={uxuiTimeline} {containerWidth} {textWidth} {baseFontSize}></UiUxNerd>

	<Photographer timeline={photographerTimeline} {containerWidth} {textWidth} {baseFontSize}
	></Photographer>
</div>

<style>
	p span:not(.custom) {
		color: var(--color-brandYellow-300);
	}
</style>
