<!-- spell-checker: disable -->
<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	import type { Snippet } from 'svelte';
	import { PUBLIC_ENV } from '$env/static/public';

	let {
		children,
		src,
		alt,
		class: className
	}: { children?: Snippet; src: Picture | string; alt: string; class?: string } = $props();
</script>

{#if PUBLIC_ENV === 'production'}
	<enhanced:img class={className} {src} {alt}>
		{#if children}
			{@render children()}
		{/if}
	</enhanced:img>
{:else if typeof src === 'string'}
	<img class={className} {src} {alt} />
{/if}
