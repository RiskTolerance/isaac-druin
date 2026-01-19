<script lang="ts">
	import Image from '$client/blocks/Image.svelte';
	let {
		containerWidth,
		textWidth,
		baseFontSize,
		timeline,
		photographerHeight = $bindable()
	}: {
		containerWidth: number;
		textWidth: number;
		baseFontSize: number;
		timeline: GSAPTimeline;
		photographerHeight: number;
	} = $props();
	import { mountains } from '$client/images';

	let shadowOffest = $derived(Math.floor(containerWidth / 120));
</script>

<div
	bind:clientHeight={photographerHeight}
	style="max-width: {textWidth}px; font-size: clamp(2.6rem, {baseFontSize * 1.4}px, 8rem);"
	class="relative mx-auto flex w-full justify-between font-bold italic sm:font-black"
>
	<Image
		class="absolute top-0 right-0 -z-10  aspect-square w-1/8 overflow-clip object-cover object-center"
		src={mountains}
		alt="mountains"
	></Image>
	<Image
		class="absolute bottom-0 left-0 -z-10 aspect-square w-1/8 overflow-clip object-cover object-center"
		src={mountains}
		alt="mountains"
	></Image>
	<span>"</span>
	<div class="flex w-full items-center justify-center">
		<div class="relative w-fit p-2">
			<Image
				class="absolute top-4 left-4 -z-10 h-[calc(100%-32px)] w-[calc(100%-16px)] overflow-clip object-cover object-center"
				src={mountains}
				alt="mountains"
			></Image>

			<p
				style="letter-spacing:-0.4rem; text-shadow: {Math.floor(shadowOffest)}px {Math.floor(
					shadowOffest
				)}px 0px var(--color-brandGreen-800);"
				class="font-dmSans txtShadow text-brandGreen-50 z-10 text-center text-nowrap"
			>
				Photographer
			</p>
		</div>
	</div>

	<span>
		"<span style="font-size: {baseFontSize}px;" class="font-code! font-light not-italic">]</span>
	</span>
</div>

<style>
	span:not(.custom) {
		color: var(--color-brandYellow-300);
	}
</style>
