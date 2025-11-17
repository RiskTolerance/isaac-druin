<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<h1 class="text-4xl font-bold mb-8">Blog Posts</h1>

<div class="space-y-6">
	{#each data.posts as post}
		<article class="border-b border-neutral-800 pb-6">
			<h2 class="text-2xl font-bold mb-2">
				<a href="/blog/{post.slug}" class="hover:text-neutral-300 transition-colors">
					{post.metadata.title}
				</a>
			</h2>
			{#if post.metadata.excerpt}
				<p class="text-neutral-400 mb-3">{post.metadata.excerpt}</p>
			{/if}
			<div class="flex items-center gap-4 text-sm text-neutral-500">
				{#if post.metadata.date}
					<time datetime={post.metadata.date}>
						{new Date(post.metadata.date).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
					</time>
				{/if}
				{#if post.metadata.tags && Array.isArray(post.metadata.tags) && post.metadata.tags.length > 0}
					<div class="flex gap-2">
						{#each post.metadata.tags as tag}
							<span class="px-2 py-0.5 text-xs bg-neutral-800 rounded">{tag}</span>
						{/each}
					</div>
				{/if}
			</div>
		</article>
	{/each}
</div>
