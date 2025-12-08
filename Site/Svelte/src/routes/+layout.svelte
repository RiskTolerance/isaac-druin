<script lang="ts">
	import Footer from '$client/blocks/Footer.svelte';
	import Navigation from '$client/blocks/Navigation.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<!-- prose-md -->
<Navigation></Navigation>
{@render children()}

<!-- <Footer></Footer> -->
