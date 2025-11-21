<script lang="ts">
	let { children, class: className }: { children: any; class?: string } = $props();
</script>

<div class="container-layout {className}">
	{@render children()}
</div>
