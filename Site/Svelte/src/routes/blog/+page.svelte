<script lang="ts">
	import type { PageData } from './$types';
	import { BaseLayout, GridLayout } from '$layouts';
	import { BlogCard } from '$components';
	let { data }: { data: PageData } = $props();
</script>

<BaseLayout>
	<h1 class="mb-8 text-4xl font-bold">Blog Posts</h1>
	<GridLayout columns={2}>
		{#each data.posts as post}
			<BlogCard slug={post.slug} metadata={post.metadata} />
		{/each}
	</GridLayout>
</BaseLayout>
