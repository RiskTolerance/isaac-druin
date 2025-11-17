<script lang="ts">
	let { children, class: className }: { children: any; class?: string } = $props();
</script>

<div class="container mx-auto py-4 {className}">
	{@render children()}
</div>
