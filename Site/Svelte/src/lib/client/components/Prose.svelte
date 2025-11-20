<script lang="ts">
	let { children, class: className }: { children: any; class?: string } = $props();
</script>

<div class="prose dark:prose-brand-dark prose-brand-light w-full {className}">
	{@render children()}
</div>
