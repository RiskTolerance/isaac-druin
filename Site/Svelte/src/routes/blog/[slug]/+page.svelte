<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const post: Snippet = data.post as Snippet;
</script>

{@render post()}
