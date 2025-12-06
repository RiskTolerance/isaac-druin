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
			smooth: 1,
			effects: true
		});
	});

	let { children } = $props();
</script>

<!-- prose-md -->
<Navigation></Navigation>
<div id="smooth-wrapper">
	<div id="smooth-content">
		{@render children()}
	</div>
</div>
<!-- <Footer></Footer> -->
