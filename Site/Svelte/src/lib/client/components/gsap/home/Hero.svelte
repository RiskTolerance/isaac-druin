<script lang="ts">
	import { gsap } from 'gsap';
	import { SplitText } from 'gsap/SplitText';
	import { Flip } from 'gsap/Flip';
	import { GraphicDesigner, UiUxNerd, Photographer } from '$components';

	// vars
	let containerWidth = $state(0);
	// text width is determined by a css calc for the text size based on the
	let textWidth = $state(0);
	let baseFontSize = $derived((containerWidth / 27) * 1.5);

	// gsap junk
	gsap.registerPlugin(SplitText, Flip);

	import { onMount } from 'svelte';
	let fullStackTimeline: gsap.core.Timeline = $state(gsap.timeline());

	let text: HTMLElement;
	let cursor: HTMLElement;
	onMount(() => {
		const splitText = SplitText.create(text, { type: 'chars', reduceWhiteSpace: false });

		gsap.set(splitText.chars, { autoAlpha: 0 });

		splitText.chars.forEach((char, i) => {
			fullStackTimeline.to(
				char,
				{
					autoAlpha: 1,
					duration: 0.15,
					onStart: () => {
						const charState = Flip.getState(cursor);
						char.appendChild(cursor);
						Flip.from(charState, {
							duration: 0.15
						});
					}
				},
				i * 0.15
			);
		});
	});
</script>

<div class="container mx-auto space-y-6 overflow-x-clip md:space-y-2">
	<div bind:clientWidth={containerWidth} class="flex w-full items-center justify-center">
		<div bind:this={cursor} class=" text-brandGreen-300! font-code absolute top-0 left-4 font-bold">
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

	<GraphicDesigner {containerWidth} {textWidth} {baseFontSize}></GraphicDesigner>

	<UiUxNerd {containerWidth} {textWidth} {baseFontSize}></UiUxNerd>

	<Photographer {containerWidth} {textWidth} {baseFontSize}></Photographer>
</div>

<style>
	p span:not(.custom) {
		color: var(--color-brandYellow-300);
	}
</style>
