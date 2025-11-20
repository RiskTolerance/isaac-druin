<!-- spell-checker: disable -->
<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	let {
		children,
		src,
		alt,
		class: className
	}: { children?: any; src: Picture; alt: string; class?: string } = $props();
</script>

<enhanced:img class={className} {src} {alt}>
	{@render children()}
</enhanced:img>
