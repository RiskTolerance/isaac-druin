<script lang="ts">
	import { gsap } from 'gsap';
	import { SplitText } from 'gsap/SplitText';
	import { Flip } from 'gsap/Flip';
	import { GraphicDesigner, UiUxNerd, Photographer } from '$components';

	// vars
	let containerWidth = $state(0);
	let textWidth = $state(0);

	// gsap junk
	gsap.registerPlugin(SplitText, Flip);

	import { onMount } from 'svelte';
	let { timeline }: { timeline: gsap.core.Timeline } = $props();

	let text: HTMLElement;
	let cursor: HTMLElement;
	onMount(() => {
		$inspect(textWidth);
		const splitText = SplitText.create(text, { type: 'chars', reduceWhiteSpace: false });

		gsap.set(splitText.chars, { autoAlpha: 0 });

		splitText.chars.forEach((char, i) => {
			timeline.to(
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

<div class="space-y-12 md:space-y-4">
	<div bind:clientWidth={containerWidth} class="flex w-full items-center justify-center">
		<div bind:this={cursor} class=" text-brandGreen-300! font-code absolute top-0 left-4 font-bold">
			|
		</div>
		<p
			bind:clientWidth={textWidth}
			bind:this={text}
			style="font-size: calc({(containerWidth / 27) * 1.5}px);"
			class=" text-brandGreen-50! font-code font-bold"
		>
			<span>const</span>&nbsp;titles<span>:</span>&nbsp;string[]&nbsp;<span>=&nbsp;[</span><br
			/><span>"</span>Full&nbsp;Stack&nbspWeb&nbspDeveloper<span>",</span>
		</p>
	</div>

	<GraphicDesigner width={textWidth}></GraphicDesigner>

	<UiUxNerd width={textWidth}></UiUxNerd>

	<Photographer width={textWidth}></Photographer>
</div>

<style>
	p span {
		color: var(--color-brandYellow-300);
	}
</style>
