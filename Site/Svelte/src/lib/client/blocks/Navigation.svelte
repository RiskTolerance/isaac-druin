<script lang="ts">
	import { page } from '$app/state';
	import { BaseLayout } from '$layouts';

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { Flip } from 'gsap/Flip';
	gsap.registerPlugin(Flip);

	let home: HTMLElement | undefined = $state();
	let projects: HTMLElement | undefined = $state();
	let blog: HTMLElement | undefined = $state();
	let highlight: HTMLElement | undefined = $state();
	let mounted = $state(false);

	// String-based selection for SSR-friendly class application
	let selectedRoute = $derived.by(() => {
		const path = page.url.pathname;
		if (path.startsWith('/blog')) return 'blog';
		if (path.startsWith('/projects')) return 'projects';
		return 'home';
	});

	// Element-based selection for Flip animation
	let selected = $derived.by(() => {
		if (selectedRoute === 'blog') return blog;
		if (selectedRoute === 'projects') return projects;
		return home;
	});

	const motherFlippin = (to: HTMLElement | undefined) => {
		if (!highlight || !to) return;
		const initial = Flip.getState([highlight, to]);
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

<BaseLayout>
	<nav class="mx-auto flex w-fit gap-4 text-base">
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
	</nav>
</BaseLayout>

<span bind:this={highlight} class="highlight bg-brandGreen-200 invisible absolute inset-0 -z-10"
></span>

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
