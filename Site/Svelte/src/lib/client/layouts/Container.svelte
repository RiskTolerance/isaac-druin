<script lang="ts">
	let { children, class: className }: { children: any; class?: string } = $props();
</script>

<div class="container mx-auto p-4 {className}">
	{@render children()}
</div>
