<script lang="ts">
	import { SquareArrowOutUpRight } from '@lucide/svelte';
</script>

<div class="mx-auto max-w-3xl">
	<p>Enough about me, though.</p>
	<p>Check out this picture of my dog.</p>
	<img
		class="aspect-video w-full object-cover object-center"
		src="https://picsum.photos/600/400"
		alt="Felix in Canada"
	/>
	<p>(a very good boy)</p>
	<p class="flex">
		(his&nbsp;<a class="flex items-center text-green-400" href="/"
			>website<SquareArrowOutUpRight class="h-4"></SquareArrowOutUpRight></a
		> is cooler than mine)
	</p>
</div>
