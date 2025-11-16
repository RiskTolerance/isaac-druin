<script lang="ts">
	let {
		title,
		excerpt,
		image,
		link
	}: { title: string; excerpt: string; image: string; link: string } = $props();
</script>

<div class="flex aspect-4/1 w-fit min-w-[800px] overflow-clip rounded-md bg-slate-100 shadow-md">
	<div class="w-2/3 p-8">
		<p>{title}</p>
		<p>{excerpt}</p>
	</div>

	<img class="w-1/3 object-cover object-center" src={image} alt={title} />
</div>
