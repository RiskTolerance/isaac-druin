<script lang="ts">
	import Footer from '$lib/blocks/layout/Footer.svelte';
	import Navigation from '$lib/blocks/layout/Navigation.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Navigation></Navigation>
{@render children()}
<Footer></Footer>
