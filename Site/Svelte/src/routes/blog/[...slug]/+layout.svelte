<script lang="ts">
	import { browser } from '$app/environment';
	let { children }: { children: any } = $props();
	import BlogCommentSection from '$client/blocks/BlogCommentSection.svelte';
	import { BaseLayout, ProseLayout } from '$layouts';
</script>

<BaseLayout>
	{@render children()}

	{#if browser}
		<BlogCommentSection />
	{/if}
</BaseLayout>
