<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<h1>Blog Posts</h1>

{#each data.posts as post}
	<article>
		<h2>
			<a href="/blog/{post.slug}">{post.metadata.title}</a>
		</h2>
		{#if post.metadata.date}
			<time datetime={post.metadata.date}>
				{new Date(post.metadata.date).toLocaleDateString()}
			</time>
		{/if}
	</article>
{/each}
