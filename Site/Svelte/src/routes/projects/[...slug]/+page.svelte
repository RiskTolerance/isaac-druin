<script lang="ts">
	import type { PageData } from './$types';
	import type { Component } from 'svelte';

	let { data }: { data: PageData } = $props();
	const ProjectComponent = data.component as Component;
</script>

<header class="mb-8">
	<h1 class="text-4xl font-bold mb-2">{data.metadata.title}</h1>
	<div class="flex items-center gap-4 mb-4">
		{#if data.metadata.date}
			<time datetime={data.metadata.date} class="text-neutral-500">
				{new Date(data.metadata.date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</time>
		{/if}
		{#if data.metadata.url}
			<a
				href={data.metadata.url}
				target="_blank"
				rel="noopener noreferrer"
				class="text-neutral-400 hover:text-neutral-300 transition-colors"
			>
				Visit Site →
			</a>
		{/if}
	</div>
	{#if data.metadata.tags && Array.isArray(data.metadata.tags) && data.metadata.tags.length > 0}
		<div class="flex gap-2 mt-4">
			{#each data.metadata.tags as tag}
				<span class="px-2 py-1 text-xs bg-neutral-800 rounded">{tag}</span>
			{/each}
		</div>
	{/if}
</header>

<ProjectComponent />

