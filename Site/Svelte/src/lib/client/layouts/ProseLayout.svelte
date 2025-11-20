<script lang="ts">
	let { children, class: className }: { children: any; class?: string } = $props();
</script>

<div class="layout-prose {className}">
	{@render children()}
</div>
