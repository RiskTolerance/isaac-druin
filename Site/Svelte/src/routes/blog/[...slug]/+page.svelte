<script lang="ts">
	import type { PageData } from './$types';
	import type { Component } from 'svelte';

	let { data }: { data: PageData } = $props();
	const PostComponent = data.component as Component;
</script>

<header class="prose mb-8">
	<h1 class="mb-2 text-4xl font-bold">{data.metadata.title}</h1>
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
		<div class="mt-4 flex gap-2">
			{#each data.metadata.tags as tag}
				<span class="rounded bg-neutral-800 px-2 py-1 text-xs">{tag}</span>
			{/each}
		</div>
	{/if}
</header>

<PostComponent />
