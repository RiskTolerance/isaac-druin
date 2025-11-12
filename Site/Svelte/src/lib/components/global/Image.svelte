<script lang="ts">
	let { path }: { path: string } = $props();
</script>

<enhanced:img class="aspect-square h-50 w-50 bg-slate-500 object-cover" src={path} alt="Image" />

<p class="bg-amber-500">hi</p>
