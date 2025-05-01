<script lang="ts">
	let {
		title,
		description,
		image,
		link
	}: {
		title: string;
		description: string;
		image: string;
		link: string;
	} = $props();
</script>

<div class="flex aspect-4/1 w-fit min-w-[800px] overflow-clip rounded-md bg-slate-100 shadow-md">
	<div class="w-2/3 p-8">
		<p>{title}</p>
		<p>{description}</p>
	</div>

	<img class="cover w-1/3" src={image} alt={title} />
</div>
