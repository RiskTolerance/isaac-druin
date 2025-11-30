<script lang="ts">
	import Image from '$client/blocks/Image.svelte';
	let { width }: { width: number } = $props();
	import { mountains } from '$client/images';
</script>

<div
	style="max-width: {width}px; font-size: clamp(2.4rem, calc({(width / 27) * 3.4}px), 8rem);"
	class="relative mx-auto flex w-full justify-between font-bold italic sm:font-black"
>
	<Image
		class="absolute -top-[5%] right-0 -z-10  aspect-square w-1/8 overflow-clip object-cover object-center"
		src={mountains}
		alt="mountains"
	></Image>
	<Image
		class="absolute -bottom-[5%] left-0 -z-10 aspect-square w-1/8 overflow-clip object-cover object-center"
		src={mountains}
		alt="mountains"
	></Image>
	<p style="text-shadow: {width / 120}px {width / 120}px 0px var(--color-brandGreen-800);">"</p>
	<div class="flex w-full items-center justify-center">
		<div class="relative w-fit p-2">
			<Image
				class="absolute top-4 left-4 -z-10 h-[calc(100%-32px)] w-[calc(100%-16px)] overflow-clip object-cover object-center"
				src={mountains}
				alt="mountains"
			></Image>

			<p
				style="letter-spacing:-0.4rem; text-shadow: {Math.floor(width / 120)}px {Math.floor(
					width / 120
				)}px 0px var(--color-brandGreen-800);"
				class="font-dmSans txtShadow z-10 text-center text-nowrap"
			>
				Photographer
			</p>
		</div>
	</div>

	<p style="text-shadow: {width / 120}px {width / 120}px 0px var(--color-brandGreen-800);">
		"<span
			style="font-size: calc({(width / 24.5) * 1.5}px);"
			class="font-code! text-brandYellow-300 not-italic">]</span
		>
	</p>
</div>
