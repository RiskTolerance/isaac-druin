<script lang="ts">
	import { page } from '$app/state';
	import { BaseLayout } from '$layouts';

	import { gsap } from 'gsap';
	import { Flip } from 'gsap/Flip';
	import { onMount } from 'svelte';
	gsap.registerPlugin(Flip);

	let home: HTMLElement | undefined = $state();
	let projects: HTMLElement | undefined = $state();
	let blog: HTMLElement | undefined = $state();
	let highlight: HTMLElement | undefined = $state();

	let selected = $derived.by(() => {
		const path = page.url.pathname;
		if (path.startsWith('/blog')) return blog;
		if (path.startsWith('/projects')) return projects;
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

	onMount(() => {
		if (highlight) {
			selected?.appendChild(highlight);
			highlight.classList.toggle('hidden');
		}
	});
</script>

<span bind:this={highlight} class="highlight bg-brandGreen-200 absolute inset-0 -z-10 hidden"
></span>

<BaseLayout>
	<nav class="mx-auto flex w-fit gap-4">
		<a onclick={() => motherFlippin(home)} href="/">
			<span
				bind:this={home}
				class="navBtn transition-colors duration-300 {selected === home
					? 'text-brandGray-800'
					: ''}"
			>
				Home
			</span></a
		>
		<a onclick={() => motherFlippin(projects)} href="/projects"
			><span
				bind:this={projects}
				class="navBtn transition-colors duration-300 {selected === projects
					? 'text-brandGray-800'
					: ''}">Projects</span
			></a
		>
		<a onclick={() => motherFlippin(blog)} href="/blog"
			><span
				bind:this={blog}
				class="navBtn transition-colors duration-300 {selected === blog
					? 'text-brandGray-800'
					: ''}">Blog</span
			></a
		>
	</nav>
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
