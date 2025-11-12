<script lang="ts">
	let { path }: { path: string } = $props();

	import image from '$lib/images/mountains.jpg';
	import image2 from '$lib/images/mountains.jpg?enhanced';
</script>

<img class="aspect-square h-50 w-50 bg-slate-500 object-cover" src={image} alt="Mountains" />
<enhanced:img src={image2} alt="Mountains" />
<p class="bg-amber-500">hi</p>
