<script lang="ts">
	import type { PostMetadata } from '$client/posts/posts';
	import type { ProjectMetadata } from '$client/posts/projects';
	import { Image } from '$blocks';
	import { Chip } from '$components';

	function isProjectMetadata(meta: PostMetadata | ProjectMetadata): meta is ProjectMetadata {
		return 'url' in meta;
	}

	let { class: className, metadata }: { class?: string; metadata: PostMetadata | ProjectMetadata } =
		$props();
	let { title, date, tags, featuredImage } = metadata;
	const url = isProjectMetadata(metadata) ? metadata.url : undefined;
</script>

<header class="{className} relative flex h-[30vh] items-start justify-center md:h-[50vh]">
	{#if featuredImage}
		<Image
			src={featuredImage}
			alt="this is an image!"
			class="absolute top-0 left-0 -z-10 flex  h-full w-full object-cover"
		/>
	{/if}
	<div class="bg-brandGreen-800/50 flex w-3xl flex-col items-center gap-8 p-8">
		<div class=" flex w-full items-center justify-center gap-4">
			{#if date}
				<time datetime={date} class="text-brandGray-200">
					{new Date(date).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</time>
			{/if}
			<!-- {#if url}
				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					class="text-neutral-400 transition-colors hover:text-neutral-300"
				>
					Visit Site →
				</a>
			{/if} -->
			{#if tags && Array.isArray(tags) && tags.length > 0}
				<div class="flex gap-2">
					{#each tags as tag}
						<Chip>{tag}</Chip>
					{/each}
				</div>
			{/if}
		</div>
		<h1 class="mb-2 text-center text-5xl! font-bold text-balance">{title}</h1>
	</div>
</header>
