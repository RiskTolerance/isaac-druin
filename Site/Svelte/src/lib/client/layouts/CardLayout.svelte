<script lang="ts">
	import { Image } from '$blocks';
	import type { Picture } from 'vite-imagetools';
	let {
		children,
		class: className,
		image
	}: { children: any; class?: string; image?: Picture } = $props();
</script>

<div class="group border-brandGreen-300 relative h-full overflow-clip border">
	<!-- background image -->
	{#if image}
		<Image
			src={image}
			alt="background"
			class="absolute h-full w-full object-cover opacity-30 transition-transform duration-200 group-hover:scale-105"
		/>
	{/if}
	<div class="card-layout {className}">
		{@render children()}
	</div>
</div>
