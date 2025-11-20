<script lang="ts">
	let { children, class: className }: { children: any; class?: string } = $props();
</script>

<div class="prose dark:prose-brand-dark prose-brand-light mx-auto max-w-3xl {className}">
	{@render children()}
</div>
