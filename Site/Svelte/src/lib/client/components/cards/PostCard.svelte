<script lang="ts">
	import { CardLayout } from '$layouts';
	import type { PostMetadata } from '$client/posts/posts';
	import type { ProjectMetadata } from '$client/posts/projects';

	function isProjectMetadata(meta: PostMetadata | ProjectMetadata): meta is ProjectMetadata {
		return 'url' in meta;
	}

	let {
		slug,
		metadata,
		routePrefix
	}: {
		slug: string;
		metadata: PostMetadata | ProjectMetadata;
		routePrefix: 'blog' | 'projects';
	} = $props();
</script>

<a href="/{routePrefix}/{slug}" class="group transition-colors">
	<CardLayout image={metadata.featuredImage}>
		<article class="relative border-b border-neutral-600 pb-6">
			<div class="relative z-10">
				<h2 class="mb-2 text-2xl font-bold">
					{metadata.title}
				</h2>
				{#if metadata.excerpt}
					<p class="mb-3 text-neutral-400">{metadata.excerpt}</p>
				{/if}
				<div class="flex items-center gap-4 text-sm text-neutral-400">
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
								<span
									class="rounded border border-neutral-600 bg-neutral-800 px-2 py-0.5 text-xs text-orange-700"
									>{tag}</span
								>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</article>
	</CardLayout>
</a>

