<script lang="ts">
	const blogPosts = [
		{
			title: 'Post 1',
			slug: 'post-1',
			content: 'This is the content of post 1'
		},
		{
			title: 'Post 2',
			slug: 'post-2',
			content: 'This is the content of post 2'
		}
	];
</script>

{#each blogPosts as post}
	<div>
		<h2>{post.title}</h2>
		<p>{post.content}</p>
	</div>
{/each}
