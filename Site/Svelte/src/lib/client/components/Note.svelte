<script lang="ts">
	let { children }: { children: any } = $props();
	import { Info } from '@lucide/svelte';
</script>

<div class="flex items-center gap-4 py-[2px]! pl-4">
	<Info class="h-8 w-8 shrink-0 stroke-amber-400" />
	{@render children()}
</div>
