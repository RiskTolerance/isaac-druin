<script lang="ts">
	import Footer from '$client/blocks/Footer.svelte';
	import Navigation from '$client/blocks/Navigation.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	import { gsap } from 'gsap';
	import { ScrollSmoother } from 'gsap/ScrollSmoother';
	gsap.registerPlugin(ScrollSmoother);

	onMount(() => {
		ScrollSmoother.create({
			content: '#smooooth',
			smooth: 1,
			effects: true
		});
	});

	let { children } = $props();
</script>

<!-- prose-md -->
<div id="smooooth">
	<Navigation></Navigation>
	{@render children()}
	<Footer></Footer>
</div>
