<script lang="ts">
	import Footer from '$blocks/layout/Footer.svelte';
	import Navigation from '$blocks/layout/Navigation.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<Navigation></Navigation>
{@render children()}
<Footer></Footer>
