<script lang="ts">
	import type { PostMetadata } from '$client/posts/posts';
	import type { ProjectMetadata } from '$client/posts/projects';
	import { Image } from '$blocks';
	import { Chip } from '$components';
	import { Link, Link2Off } from '@lucide/svelte';

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
	<div class="bg-brandGreen-800/50 relative flex w-3xl flex-col gap-8 p-2 pb-8 sm:p-4 md:p-8">
		<div class=" flex w-full justify-center gap-4">
			{#if date}
				<time datetime={date} class="text-brandGray-200 text-xs sm:text-base">
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
		<h1 class="my-auto text-center text-3xl! font-bold text-balance md:text-5xl!">
			{title}
		</h1>
	</div>
	<a
		href="https://www.google.com"
		target="_blank"
		class="text-brandYellow-200 border-brandGray-300 bg-brandGray-800 absolute right-1 bottom-1 flex items-center gap-2 rounded-xs border px-2 py-1 text-xs"
	>
		<span>Image credit</span>
		<Link class="stroke-brandYellow-300 aspect-square h-4 w-4"></Link>
	</a>
</header>
