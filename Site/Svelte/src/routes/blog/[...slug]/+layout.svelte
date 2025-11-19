<script lang="ts">
	let { children }: { children: any } = $props();
	import BlogCommentSection from '$client/blocks/BlogCommentSection.svelte';
</script>

<div>
	{@render children()}

	<BlogCommentSection />
</div>
