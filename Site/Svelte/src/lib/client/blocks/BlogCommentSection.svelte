<script lang="ts">
	import { postComment, getComment } from '$remotes/comment.remote';
	import { page } from '$app/state';
	import { FormButton } from '$components';

	const slug = page.url.pathname.split('/').pop() ?? '';
	const { author, content } = postComment.fields;
</script>

<form class="mx-auto flex w-fit flex-col gap-4" {...postComment} enctype="multipart/form-data">
	<input type="hidden" value={slug} />
	<label>
		<input {...author.as('text')} placeholder="John Doe" /> Author
	</label>
	<label>
		<textarea {...content.as('text')} placeholder="Write something nice :)"></textarea> Content
	</label>
	<FormButton />
</form>

<div>
	{#each await getComment(slug) as { author, content }}
		<p>{author}</p>
		<p>{content}</p>
	{/each}
</div>
