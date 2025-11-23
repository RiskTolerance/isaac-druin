<script lang="ts">
	import { postComment, getComment } from '$remotes/comment.remote';
	import { page } from '$app/state';
	import { FormButton } from '$components';
	import { commentFormSchema } from '$lib/schemas/comment';
	import { ProseLayout } from '$layouts';

	const slug = page.url.pathname.split('/').pop() ?? '';
	const { author, content } = postComment.fields;
</script>

<div class="mx-auto flex w-full max-w-2xl flex-col gap-4 py-8">
	<label class="text-3xl font-bold" for="comment-form">Comments</label>
	<form
		id="comment-form"
		class="flex flex-col gap-4"
		{...postComment.preflight(commentFormSchema)}
		enctype="multipart/form-data"
	>
		<input type="hidden" name="slug" value={slug} />

		<label>
			{#each author.issues() as issue}
				<span class="text-sm text-red-500">{issue.message}</span>
			{/each}
			<input {...author.as('text')} placeholder="John Doe" /> Author
		</label>
		<label>
			{#each content.issues() as issue}
				<span class="text-sm text-red-500">{issue.message}</span>
			{/each}
			<textarea {...content.as('text')} placeholder="Write something nice :)"></textarea> Content
		</label>
		<FormButton />
	</form>

	{#each await getComment(slug) as { author, content }}
		<div class="mx-auto w-full max-w-3xl border border-white p-4">
			<p>{author}</p>
			<p>{content}</p>
		</div>
	{/each}
</div>
