<script lang="ts">
	import { onMount } from 'svelte';
	import { GraphicDesigner, UiUxNerd, Photographer } from '$components';
	import { beforeNavigate } from '$app/navigation';
	import { gsap, Flip, SplitText, ScrollTrigger } from 'gsap/all';

	gsap.registerPlugin(SplitText, Flip, ScrollTrigger);

	let containerWidth = $state(0);
	let textWidth = $state(0);
	let baseFontSize = $derived((containerWidth / 27) * 1.5);
	let fullStackHeight: number = $state(0);
	let graphicDesignerHeight: number = $state(0);
	let uiuxNerdHeight: number = $state(0);
	let photographerHeight: number = $state(0);
	let windowHeight = $state(0);

	let totalHeight: number = $derived.by(() => {
		return fullStackHeight + graphicDesignerHeight + uiuxNerdHeight + photographerHeight;
	});
	let marginTop: number = $derived.by(() => {
		return (windowHeight - totalHeight) / 2;
	});

	// gsap junk - initialize timelines immediately
	let masterTimeline = gsap.timeline({ paused: true });
	let [fullStackTimeline, graphicDesignerTimeline, uxuiTimeline, photographerTimeline] = Array.from(
		{ length: 4 },
		() => gsap.timeline()
	);

	let text: HTMLElement, cursor: HTMLElement;
	let scrollTriggerInstance: ScrollTrigger;

	onMount(() => {
		const splitText = SplitText.create(text, { type: 'chars', reduceWhiteSpace: false });
		splitText.chars.forEach((char, i) => {
			fullStackTimeline.from(
				char,
				{
					autoAlpha: 0,
					duration: 0.15,
					onStart: () => {
						const charState = Flip.getState(cursor);
						char.appendChild(cursor);
						Flip.from(charState, {
							duration: 0.01
						});
					},
					onComplete: () => {
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
			end: '+=8000'
		});
	});

	beforeNavigate(() => {
		scrollTriggerInstance?.kill();
		masterTimeline.getChildren().forEach((t) => t.kill());
		masterTimeline.kill();
	});
</script>

<svelte:window bind:innerHeight={windowHeight} />

<div
	id="hero"
	class="container mx-auto items-center space-y-6 overflow-x-clip select-none md:space-y-2"
>
	<div style="height: {marginTop}px;"></div>
	<div
		bind:clientHeight={fullStackHeight}
		bind:clientWidth={containerWidth}
		class="flex w-full items-center justify-center"
	>
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
			<span>const</span>&nbsp;facets<span>:</span>&nbsp;string[]&nbsp;<span>=&nbsp;[</span><br
			/><span>"</span><span class="custom font-bold">Full&nbsp;Stack&nbspWeb&nbspDeveloper</span
			><span>",</span>
		</p>
	</div>

	<GraphicDesigner bind:graphicDesignerHeight timeline={graphicDesignerTimeline} {textWidth}
	></GraphicDesigner>

	<UiUxNerd bind:uiuxNerdHeight timeline={uxuiTimeline} {textWidth} {baseFontSize}></UiUxNerd>

	<Photographer
		bind:photographerHeight
		timeline={photographerTimeline}
		{containerWidth}
		{textWidth}
		{baseFontSize}
	></Photographer>
</div>

<style>
	p span:not(.custom) {
		color: var(--color-brandYellow-300);
	}
</style>
