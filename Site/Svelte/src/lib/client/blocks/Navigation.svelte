<script lang="ts">
	import { BaseLayout } from '$layouts';
	import { Settings2 } from '@lucide/svelte';
	import { page } from '$app/state';
	import { globalState } from '$lib/state/global.svelte';
	import { Switch } from '$components';
	import { onMount, onDestroy } from 'svelte';
	import { gsap } from 'gsap';
	import { Flip } from 'gsap/Flip';
	import { onClickOutside } from 'runed';
	import { goto } from '$app/navigation';
	import { buttonSound } from '$components/audioHandler.svelte';
	gsap.registerPlugin(Flip);

	let toggleSettings = $state(false);
	let settingsContainer = $state<HTMLElement>();
	let home = $state<HTMLElement>();
	let projects = $state<HTMLElement>();
	let blog = $state<HTMLElement>();
	let highlight = $state<HTMLElement>();
	let styleguide = $state<HTMLElement>();

	// Track current Flip animation to kill before starting new one
	let currentFlipAnimation: GSAPTimeline | undefined;

	onClickOutside(
		() => settingsContainer,
		() => {
			toggleSettings && (toggleSettings = !toggleSettings);
		}
	);

	let mounted = $state(false);

	// String-based selection for SSR-friendly class application
	let selectedRoute = $derived.by(() => {
		const path = page.url.pathname;
		if (path.startsWith('/blog')) return 'blog';
		if (path.startsWith('/projects')) return 'projects';
		if (path.startsWith('/styleguide')) return 'styleguide';
		return 'home';
	});

	// Element-based selection for Flip animation
	let selected = $derived.by(() => {
		if (selectedRoute === 'blog') return blog;
		if (selectedRoute === 'projects') return projects;
		if (selectedRoute === 'styleguide') return styleguide;
		return home;
	});

	const motherFlippin = (to: HTMLElement | undefined) => {
		if (!highlight || !to) return;

		//play sound if toggled
		buttonSound();

		// Kill any running Flip animation before starting a new one
		currentFlipAnimation?.kill();

		const initial = Flip.getState(highlight);

		to.appendChild(highlight);

		currentFlipAnimation = Flip.from(initial, {
			duration: 0.3,
			onComplete: () => {
				currentFlipAnimation = undefined;
			}
		});
	};

	// Position highlight once on mount - no animation, just place it
	onMount(() => {
		if (highlight && selected) {
			selected.appendChild(highlight);
			highlight.classList.remove('invisible');
			mounted = true;
		}
	});

	// Cleanup on destroy (even though root layout should never unmounts)
	onDestroy(() => {
		currentFlipAnimation?.kill();
	});

	$effect(() => {
		if (!globalState.devMode && page.url.pathname.includes('styleguide')) {
			motherFlippin(home);
			goto('/');
		}
	});
</script>

<BaseLayout class="grid grid-cols-3 place-items-center">
	<div></div>
	<nav class="mx-auto flex w-fit gap-4 text-base">
		<div
			bind:this={highlight}
			class="highlight bg-brandYellow-300 invisible absolute inset-0 -z-10"
		></div>

		<a onclick={() => motherFlippin(home)} href="/">
			<span
				bind:this={home}
				class={[
					selectedRoute === 'home' && 'text-brandGray-800',
					!mounted && selectedRoute === 'home' && 'bg-brandGreen-200',
					'navBtn transition-colors duration-300'
				]}
			>
				Home
			</span></a
		>
		<a onclick={() => motherFlippin(projects)} href="/projects"
			><span
				bind:this={projects}
				class={[
					selectedRoute === 'projects' && 'text-brandGray-800',
					!mounted && selectedRoute === 'projects' && 'bg-brandGreen-200',
					'navBtn transition-colors duration-300'
				]}>Projects</span
			></a
		>
		<a onclick={() => motherFlippin(blog)} href="/blog"
			><span
				bind:this={blog}
				class={[
					selectedRoute === 'blog' && 'text-brandGray-800',
					!mounted && selectedRoute === 'blog' && 'bg-brandGreen-200',
					'navBtn transition-colors duration-300'
				]}>Blog</span
			></a
		>

		<a
			class:hidden={!globalState.devMode}
			onclick={() => motherFlippin(styleguide)}
			href="/styleguide"
			><span
				bind:this={styleguide}
				class={[
					selectedRoute === 'styleguide' && 'text-brandGray-800',
					!mounted && selectedRoute === 'styleguide' && 'bg-brandGreen-200',
					'navBtn text-nowrap transition-colors duration-300'
				]}>Style Guide</span
			></a
		>
	</nav>
	<div bind:this={settingsContainer} class="relative z-999 justify-self-end">
		<button
			onclick={() => {
				toggleSettings = !toggleSettings;
			}}
			class="group hover:bg-brandYellow-300 aspect-square h-full cursor-pointer p-2 transition-colors duration-300"
		>
			<Settings2
				class="stroke-brandYellow-300 group-hover:stroke-brandGreen-900 transition-colors duration-300"
			></Settings2>
		</button>

		<div
			class="bg-brandGreen-300 invisible absolute right-0 bottom-0 translate-y-[calc(100%+8px)] px-4 py-3"
			class:visible={toggleSettings}
		>
			<ul class=" space-y-2">
				<li>
					<Switch
						class="[&>label]:text-brandGreen-900! font-bold"
						bind:checked={globalState.sound}
						onCheckedChange={(checked) => {
							checked && buttonSound();
						}}
						id="toggle-sound"
						labelText="Sound"
					></Switch>
				</li>
				<li>
					<Switch
						class="[&>label]:text-brandGreen-900! font-bold"
						bind:checked={globalState.devMode}
						id="toggle-dev"
						labelText="Dev Mode"
					></Switch>
				</li>
				<li>
					<Switch
						class="[&>label]:text-brandGreen-900! font-bold"
						id="toggle-dark"
						labelText="Dark Mode"
					></Switch>
				</li>
			</ul>
		</div>
	</div>
</BaseLayout>

<style>
	.navBtn {
		padding-inline: 12px;
		padding-block: 6px;
		position: relative;
	}
	.navBtn:hover {
		outline-color: var(--color-brandYellow-300);
		outline-style: dotted;
		outline-width: 2px;
	}
</style>
