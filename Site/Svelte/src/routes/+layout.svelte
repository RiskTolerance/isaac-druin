<script lang="ts">
	import Footer from '$lib/client/blocks/layout/Footer.svelte';
	import Navigation from '$lib/client/blocks/layout/Navigation.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Navigation></Navigation>
{@render children()}
<Footer></Footer>
