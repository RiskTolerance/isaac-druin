<script lang="ts">
	import type { PostMetadata } from '$client/posts/posts';
	import type { ProjectMetadata } from '$client/posts/projects';

	function isProjectMetadata(meta: PostMetadata | ProjectMetadata): meta is ProjectMetadata {
		return 'url' in meta;
	}

	let metadata: PostMetadata | ProjectMetadata = $props();
	let { title, date, tags } = metadata;
	const url = isProjectMetadata(metadata) ? metadata.url : undefined;
</script>

<header class="mb-8">
	<h1 class="mb-2 text-4xl font-bold">{title}</h1>
	<div class="mb-4 flex items-center gap-4">
		{#if date}
			<time datetime={date} class="text-neutral-500">
				{new Date(date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</time>
		{/if}
		{#if url}
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				class="text-neutral-400 transition-colors hover:text-neutral-300"
			>
				Visit Site →
			</a>
		{/if}
	</div>
	{#if tags && Array.isArray(tags) && tags.length > 0}
		<div class="mt-4 flex gap-2">
			{#each tags as tag}
				<span class="rounded bg-neutral-800 px-2 py-1 text-xs">{tag}</span>
			{/each}
		</div>
	{/if}
</header>
