<script lang="ts">
	import type { PageData } from './$types';
	import type { Component } from 'svelte';

	let { data }: { data: PageData } = $props();
	const PostComponent = data.component as Component;
</script>

<header class="mb-8">
	<h1 class="text-4xl font-bold mb-2">{data.metadata.title}</h1>
	{#if data.metadata.date}
		<time datetime={data.metadata.date} class="text-neutral-500">
			{new Date(data.metadata.date).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
		</time>
	{/if}
	{#if data.metadata.tags && Array.isArray(data.metadata.tags) && data.metadata.tags.length > 0}
		<div class="flex gap-2 mt-4">
			{#each data.metadata.tags as tag}
				<span class="px-2 py-1 text-xs bg-neutral-800 rounded">{tag}</span>
			{/each}
		</div>
	{/if}
</header>

<PostComponent />
