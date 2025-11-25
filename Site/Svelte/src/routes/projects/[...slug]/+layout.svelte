<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import BlogCommentSection from '$blocks/BlogCommentSection.svelte';
	import { BaseLayout } from '$layouts';
	import { PostHeader } from '$components';
	let { children }: { children: any } = $props();
</script>

<BaseLayout>
	<PostHeader metadata={page.data.metadata} />

	{@render children()}

	{#if browser}
		<BlogCommentSection />
	{/if}
</BaseLayout>
