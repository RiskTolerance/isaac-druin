<script lang="ts">
	import { page } from '$app/state';
	import { BaseLayout } from '$layouts';
	import { Settings2 } from '@lucide/svelte';
	import { globalState } from '$lib/state/global.svelte';
	import { Switch } from '$components';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { Flip } from 'gsap/Flip';

	let toggleSettings = $state(false);

	gsap.registerPlugin(Flip);

	let home: HTMLElement | undefined = $state();
	let projects: HTMLElement | undefined = $state();
	let blog: HTMLElement | undefined = $state();
	let highlight: HTMLElement | undefined = $state();
	let styleguide: HTMLElement | undefined = $state();

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
	});

	const motherFlippin = (to: HTMLElement | undefined) => {
		if (!highlight || !to) return;

		const initial = Flip.getState(highlight);

		to.appendChild(highlight);

		Flip.from(initial, {
			duration: 0.3
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
</script>

<BaseLayout class="grid grid-cols-3 place-items-center">
	<div></div>
	<nav class="mx-auto flex w-fit gap-4 text-base">
		<div
			bind:this={highlight}
			class="highlight bg-brandGreen-400 invisible absolute inset-0 -z-10"
		></div>

		<a onclick={() => motherFlippin(home)} href="/">
			<span
				bind:this={home}
				class="navBtn transition-colors duration-300"
				class:text-brandGray-800={selectedRoute === 'home'}
				class:bg-brandGreen-200={!mounted && selectedRoute === 'home'}
			>
				Home
			</span></a
		>
		<a onclick={() => motherFlippin(projects)} href="/projects"
			><span
				bind:this={projects}
				class="navBtn transition-colors duration-300"
				class:text-brandGray-800={selectedRoute === 'projects'}
				class:bg-brandGreen-200={!mounted && selectedRoute === 'projects'}>Projects</span
			></a
		>
		<a onclick={() => motherFlippin(blog)} href="/blog"
			><span
				bind:this={blog}
				class="navBtn transition-colors duration-300"
				class:text-brandGray-800={selectedRoute === 'blog'}
				class:bg-brandGreen-200={!mounted && selectedRoute === 'blog'}>Blog</span
			></a
		>
		{#if globalState.devMode}
			<a onclick={() => motherFlippin(blog)} href="/styleguide"
				><span
					bind:this={styleguide}
					class="navBtn transition-colors duration-300"
					class:text-brandGray-800={selectedRoute === 'styleguide'}
					class:bg-brandGreen-200={!mounted && selectedRoute === 'styleguide'}>Style Guide</span
				></a
			>
		{/if}
	</nav>
	<div class="relative z-999 justify-self-end">
		<Settings2
			onclick={() => {
				toggleSettings = !toggleSettings;
			}}
			class="stroke-brandGreen-300"
		></Settings2>
		<div
			class="bg-brandGreen-500 invisible absolute right-0 bottom-0 translate-y-[calc(100%+12px)] px-4 py-3"
			class:visible={toggleSettings}
		>
			<ul class="space-y-2">
				<li>
					<Switch id="toggle-sound" labelText="Sound"></Switch>
				</li>
				<li>
					<Switch bind:checked={globalState.devMode} id="toggle-dev" labelText="Dev Mode"></Switch>
				</li>
				<li>
					<Switch id="toggle-dark" labelText="Dark Mode"></Switch>
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
		outline-color: var(--color-brandGreen-400);
		outline-style: dotted;
		outline-width: 2px;
	}
</style>
