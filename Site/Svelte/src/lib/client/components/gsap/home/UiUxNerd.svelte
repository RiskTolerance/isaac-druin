<script lang="ts">
	import { gsap } from 'gsap';
	import { SplitText } from 'gsap/SplitText';
	import { onMount } from 'svelte';
	gsap.registerPlugin(SplitText);

	let {
		containerWidth,
		textWidth,
		baseFontSize,
		timeline
	}: { containerWidth: number; textWidth: number; baseFontSize: number; timeline: GSAPTimeline } =
		$props();

	let text: HTMLElement;
	let xRuler: HTMLElement;
	let xRulerText: HTMLElement | undefined = $state();
	let yRuler: HTMLElement;

	let containerW = $state(0);
	let containerH = $state(0);
	let contentW = $state(0);
	let contentH = $state(0);
	let marginX = $derived((containerW - contentW) / 2);
	let marginY = $derived((containerH - contentH) / 2);

	//SAP
	onMount(() => {
		const splitText = SplitText.create(text, { type: 'chars' });

		splitText.chars.forEach((char, i) => {
			timeline.from(char, {
				alpha: 0,
				duration: 0.15,
				stagger: 0.1,
				y: () => {
					return i % 2 === 0 ? 25 : -25;
				}
			});
		});

		timeline.to(xRuler, {
			scaleX: 1,
			duration: 0.5,
			onComplete: () => {
				xRuler?.classList.remove('scale-x-0');
				gsap.to(xRulerText!, {
					y: 40,
					duration: 0.3
				});
			}
		});
	});
</script>

<div
	style="max-width: {textWidth}px; padding-block: {contentH * 0.2}px;"
	class="border-brandGreen-900 pattern relative mx-auto flex w-full justify-center border-4"
	bind:clientWidth={containerW}
	bind:clientHeight={containerH}
>
	<div
		bind:this={xRuler}
		style="width: {marginX - 10}px;"
		class="border-x-brandYellow-200 absolute top-1/3 left-[5px] z-20 h-2 origin-center -translate-y-1/2 scale-x-0 border-x-2 sm:top-1/2 sm:translate-y-0"
	>
		<div class="border-brandYellow-200 absolute top-1/2 w-full -translate-y-1/2 border-y"></div>
		<div
			style="height: {xRulerText?.clientHeight ?? 0}px;"
			class=" absolute top-2 w-full max-w-full overflow-clip"
		>
			<p
				bind:this={xRulerText}
				class=" text-brandYellow-200 absolute -top-10 left-1/2 z-20 w-fit -translate-x-1/2 text-xs sm:text-sm lg:text-nowrap"
			>
				margin-inline: {marginX}px;
			</p>
		</div>
	</div>

	<div
		bind:this={yRuler}
		style="height: {contentH * 0.2 - 4}px;"
		class="border-y-brandYellow-200 -transalte-x-1/2 absolute bottom-[2px] left-1/2 w-2 border-y-2 sm:bottom-[2px]"
	>
		<div
			class="border-brandYellow-200 absolute top-0 left-1/2 h-full -translate-x-1/2 border-x"
		></div>
		<p
			class=" text-brandYellow-200 absolute bottom-[calc(50%+2px)] left-4 z-10 w-fit translate-y-1/2 text-xs text-nowrap sm:text-sm"
		>
			margin-block: {marginY}px;
		</p>
	</div>

	<p
		bind:clientHeight={contentH}
		bind:clientWidth={contentW}
		style="font-size: calc({baseFontSize * 1.2}px);"
		class="font-metro bg-brandGreen-800 precision relative z-10 w-fit px-3 py-4 sm:px-6"
	>
		<span class=" absolute top-0 right-0 px-1 text-xs text-nowrap sm:px-2 sm:py-1 sm:text-sm"
			>text-rendering: optimizeLegibility;</span
		>
		<span class=" absolute bottom-0 left-0 px-1 py-1 text-xs sm:px-2 sm:text-sm"
			>contrast: 10.41:1</span
		>
		<span>"</span><span class="custom" bind:this={text}>UI/UX Nerd</span><span
			>"<span style="font-size: {baseFontSize}px;" class="font-code!">,</span></span
		>
	</p>
</div>

<style>
	.pattern {
		background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
	}

	p span:not(.custom) {
		color: var(--color-brandYellow-300);
		font-family: var(--font-sans);
	}

	.precision {
		text-rendering: optimizeLegibility;
	}
</style>
