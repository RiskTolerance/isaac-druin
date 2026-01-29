<script lang="ts">
	import { onMount } from 'svelte';

	let { children, class: className }: { children: any; class?: string } = $props();

	onMount(() => {
		const proseLinks: NodeListOf<HTMLLinkElement> = document.querySelectorAll('.prose a');
		proseLinks.forEach((link) => {
			const href = link.getAttribute('href');
			if (!href?.includes('isaacdruin')) {
				console.log(href);
				link.setAttribute('target', '_blank');
				link.setAttribute('rel', 'noopener noreferrer');
			}
		});
	});
</script>

<div class="prose dark:prose-brand-dark prose-brand-light w-full {className}">
	{@render children()}
</div>
