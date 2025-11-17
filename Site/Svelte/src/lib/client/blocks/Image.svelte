<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	let { src, alt, class: className }: { src: Picture; alt: string; class?: string } = $props();
</script>

<enhanced:img class={className} {src} {alt} />
