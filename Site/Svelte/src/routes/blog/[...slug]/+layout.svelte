<script lang="ts">
	let { children }: { children: any } = $props();
	import CommentForm from '$blocks/CommentForm.svelte';
</script>

<div>
	{@render children()}
	<CommentForm />
</div>
