<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const post: Snippet = data.post as Snippet;
</script>

{#if data.metadata}
	<header>
		{#if data.metadata.title}
			<h1>{data.metadata.title}</h1>
		{/if}
		{#if data.metadata.date}
			<time datetime={data.metadata.date}>
				{new Date(data.metadata.date).toLocaleDateString()}
			</time>
		{/if}
	</header>
{/if}

<article>
	{@render post()}
</article>
