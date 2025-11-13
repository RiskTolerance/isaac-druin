<script lang="ts">
	import Post from '$lib/blocks/blog/Post.svelte';

	const posts = [
		{
			title: 'Post 1',
			excerpt: 'This is the first post.',
			image: 'https://picsum.photos/200/300',
			link: '/blog/post1'
		},
		{
			title: 'Post 2',
			excerpt: 'This is the second post.',
			image: 'https://picsum.photos/200/300',
			link: '/blog/post2'
		},
		{
			title: 'Post 3',
			excerpt: 'This is the third post.',
			image: 'https://picsum.photos/200/300',
			link: '/blog/post3'
		}
	];
</script>

<div class="container mx-auto flex flex-col items-center gap-4">
	<div class="flex w-full justify-start">
		<p>Blog</p>
	</div>
	{#each posts as post}
		<Post {...post}></Post>
	{/each}
</div>
