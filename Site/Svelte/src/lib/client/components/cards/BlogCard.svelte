<script lang="ts">
	import { Card } from '$layouts';

	let {
		slug,
		metadata
	}: {
		slug: string;
		metadata: {
			title: string;
			excerpt?: string;
			date?: string;
			tags?: string[];
		};
	} = $props();
</script>

<a href="/blog/{slug}" class="transition-colors hover:text-neutral-300">
	<Card>
		<article class="border-b border-neutral-800 pb-6">
			<h2 class="mb-2 text-2xl font-bold">{metadata.title}</h2>
			{#if metadata.excerpt}
				<p class="mb-3 text-neutral-400">{metadata.excerpt}</p>
			{/if}
			<div class="flex items-center gap-4 text-sm text-neutral-500">
				{#if metadata.date}
					<time datetime={metadata.date}>
						{new Date(metadata.date).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
					</time>
				{/if}
				{#if metadata.tags && Array.isArray(metadata.tags) && metadata.tags.length > 0}
					<div class="flex gap-2">
						{#each metadata.tags as tag}
							<span class="rounded bg-neutral-800 px-2 py-0.5 text-xs">{tag}</span>
						{/each}
					</div>
				{/if}
			</div>
		</article>
	</Card>
</a>
