<script lang="ts">
	import { postComment, getComment } from '$remotes/comment.remote';
	import { page } from '$app/state';
	const slug = page.url.pathname.split('/').pop() ? '';
	console.log(slug);
</script>

<form {...postComment}>
	<input type="hidden" name="slug" value={slug} />
	<input type="text" name="author" placeholder="Author" />
	<input type="text" name="content" placeholder="Content" />
	<button class="bg-white" type="submit">Submit</button>
</form>

<div>
	{#each await getComment(slug) as { author, content }}
		<p>{author}</p>
		<p>{content}</p>
	{/each}
</div>
