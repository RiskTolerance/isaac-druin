<script lang="ts">
	let { children, class: className }: { children: any; class?: string } = $props();
</script>

<div class="layout-container {className}">
	{@render children()}
</div>
