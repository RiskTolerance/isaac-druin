<script lang="ts">
	import { CardLayout } from '$layouts';
	import type { PostMetadata } from '$client/posts/posts';
	import type { ProjectMetadata } from '$client/posts/projects';
	import { Chip } from '$components';
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
	<CardLayout image={metadata.featuredImage} class="h-full">
		<article class="relative h-full">
			<div class="group z-10 flex h-full flex-col justify-between gap-4">
				<div>
					<h2 class="mb-2 text-center text-2xl! text-balance sm:text-left">
						{metadata.title}
					</h2>
					{#if metadata.excerpt}
						<p class="mb-3 text-center text-sm text-balance sm:text-left sm:text-wrap">
							{metadata.excerpt}
						</p>
					{/if}
				</div>

				<div
					class="text-brandGreen-200 border-brandGreen-300 flex flex-col items-center justify-between gap-4 border-t pt-4 text-sm opacity-80 transition-opacity duration-200 group-hover:opacity-100 sm:flex-row"
				>
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
								<Chip>{tag}</Chip>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</article>
	</CardLayout>
</a>
