<script lang="ts">
	import type { Picture } from 'vite-imagetools';
	let { src, alt }: { src: Picture; alt: string } = $props();
</script>

<div class="aspect-video w-full bg-amber-300 object-cover">
	<enhanced:img {src} {alt} />
</div>
