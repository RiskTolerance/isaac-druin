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
	let container: HTMLElement;
	let innerContainer: HTMLElement;
	let text: HTMLElement;
	let xRuler: HTMLElement;
	let xRulerText: HTMLElement | undefined = $state();
	let yRuler: HTMLElement;
	let yRulerText: HTMLElement | undefined = $state();

	let containerW = $state(0);
	let containerH = $state(0);
	let contentW = $state(0);
	let contentH = $state(0);
	let marginX = $derived((containerW - contentW) / 2);
	let marginY = $derived((containerH - contentH) / 2);

	//SAP
	onMount(() => {
		timeline.from(container, {
			y: () => container.offsetHeight,
			duration: 0.5
		});

		timeline.from(innerContainer, {
			y: () => -container.offsetHeight * 2,
			duration: 0.5
		});

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

		timeline.from(xRuler, {
			scaleX: 0,
			duration: 0.5
		});

		if (xRulerText) {
			timeline.from(xRulerText, {
				absolute: true,
				y: () => -xRulerText!.offsetHeight * 4
			});
		}

		timeline.from(yRuler, {
			scaleY: 0,
			duration: 0.5
		});

		if (yRulerText) {
			timeline.from(yRulerText, {
				absolute: true,
				x: () => -yRulerText!.offsetWidth * 2
			});
		}
	});
</script>

<div class="overflow-clip">
	<div
		style="max-width: {textWidth}px; padding-block: {contentH * 0.2}px;"
		class="border-brandGreen-900 pattern relative mx-auto flex w-full justify-center overflow-clip border-4"
		bind:clientWidth={containerW}
		bind:clientHeight={containerH}
		bind:this={container}
	>
		<div
			bind:this={xRuler}
			style="width: {marginX - 10}px;"
			class="border-x-brandYellow-200 absolute top-1/3 left-[5px] z-20 h-2 origin-center -translate-y-1/2 border-x-2 sm:top-1/2 sm:translate-y-0"
		>
			<div class="border-brandYellow-200 absolute top-1/2 w-full -translate-y-1/2 border-y"></div>
			<div
				style="height: {xRulerText?.clientHeight}px;"
				class="absolute top-2 w-full max-w-full overflow-clip"
			>
				<p
					bind:this={xRulerText}
					class=" text-brandYellow-200 absolute top-0 left-1/2 z-20 w-fit -translate-x-1/2 text-xs sm:text-sm lg:text-nowrap"
				>
					margin-inline: {marginX}px;
				</p>
			</div>
		</div>

		<div
			bind:this={yRuler}
			style="height: {contentH * 0.2 - 4}px;"
			class="border-y-brandYellow-200 -transalte-x-1/2 absolute bottom-[2px] left-1/2 w-2 origin-bottom border-y-2 sm:bottom-[2px]"
		>
			<div
				class="border-brandYellow-200 absolute top-0 left-1/2 h-full -translate-x-1/2 border-x"
			></div>
			<div
				style="height: {yRulerText?.clientHeight}px;"
				class="absolute bottom-[calc(50%+2px)] left-4 w-fit translate-y-1/2 overflow-clip"
			>
				<p
					bind:this={yRulerText}
					class=" text-brandYellow-200 z-10 w-fit text-xs text-nowrap sm:text-sm"
				>
					margin-block: {marginY}px;
				</p>
			</div>
		</div>

		<p
			bind:clientHeight={contentH}
			bind:clientWidth={contentW}
			bind:this={innerContainer}
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
