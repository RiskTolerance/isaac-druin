<script lang="ts">
	import { browser } from '$app/environment';
	let { children }: { children: any } = $props();
	import BlogCommentSection from '$client/blocks/BlogCommentSection.svelte';
</script>

<div>
	{@render children()}

	{#if browser}
		<BlogCommentSection />
	{/if}
</div>
