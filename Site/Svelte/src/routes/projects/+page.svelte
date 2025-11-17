<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<h1 class="text-4xl font-bold mb-8">Projects</h1>

<div class="space-y-6">
	{#each data.projects as project}
		<article class="border-b border-neutral-800 pb-6">
			<h2 class="text-2xl font-bold mb-2">
				<a href="/projects/{project.slug}" class="hover:text-neutral-300 transition-colors">
					{project.metadata.title}
				</a>
			</h2>
			{#if project.metadata.excerpt}
				<p class="text-neutral-400 mb-3">{project.metadata.excerpt}</p>
			{/if}
			<div class="flex items-center gap-4 text-sm text-neutral-500">
				{#if project.metadata.date}
					<time datetime={project.metadata.date}>
						{new Date(project.metadata.date).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
					</time>
				{/if}
				{#if project.metadata.url}
					<a
						href={project.metadata.url}
						target="_blank"
						rel="noopener noreferrer"
						class="text-neutral-400 hover:text-neutral-300 transition-colors"
					>
						Visit Site →
					</a>
				{/if}
				{#if project.metadata.tags && Array.isArray(project.metadata.tags) && project.metadata.tags.length > 0}
					<div class="flex gap-2">
						{#each project.metadata.tags as tag}
							<span class="px-2 py-0.5 text-xs bg-neutral-800 rounded">{tag}</span>
						{/each}
					</div>
				{/if}
			</div>
		</article>
	{/each}
</div>
