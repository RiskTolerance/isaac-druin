<script lang="ts">
	let { children, class: className }: { children: any; class?: string } = $props();
</script>

<div class="card bg-neutral-100 dark:bg-neutral-900 {className}">
	{@render children()}
</div>
