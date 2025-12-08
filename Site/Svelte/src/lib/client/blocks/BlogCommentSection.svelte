<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '$components';
	import { commentFormSchema } from '$lib/schemas/comment';

	const slug = page.url.pathname.split('/').pop() ?? '';

	// Form state
	let author = $state('');
	let content = $state('');
	let errors = $state<{ author?: string[]; content?: string[] }>({});
	let submitError = $state('');
	let isSubmitting = $state(false);

	// Comments state
	let comments = $state<{ author: string; content: string }[]>([]);
	let isLoading = $state(true);

	// Fetch comments on mount
	$effect(() => {
		fetchComments();
	});

	async function fetchComments() {
		isLoading = true;
		try {
			const res = await fetch(`/api/comments?slug=${encodeURIComponent(slug)}`);
			if (res.ok) {
				comments = await res.json();
			}
		} catch (e) {
			console.error('Failed to fetch comments:', e);
		} finally {
			isLoading = false;
		}
	}

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		errors = {};
		submitError = '';

		// Client-side validation
		const parsed = commentFormSchema.safeParse({ slug, author, content });
		if (!parsed.success) {
			const flat = parsed.error.flatten();
			errors = {
				author: flat.fieldErrors.author,
				content: flat.fieldErrors.content
			};
			return;
		}

		isSubmitting = true;
		try {
			const res = await fetch('/api/comments', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ slug, author, content })
			});

			const data = await res.json();

			if (!res.ok) {
				submitError = data.error?.toString() ?? 'Failed to post comment';
				return;
			}

			// Success - clear form and refresh comments
			author = '';
			content = '';
			await fetchComments();
		} catch (e) {
			submitError = 'Failed to post comment';
			console.error(e);
		} finally {
			isSubmitting = false;
		}
	}
</script>

<div class="mx-auto flex w-full max-w-2xl flex-col gap-4 py-8">
	<label class="text-3xl font-bold" for="comment-form">Comments</label>
	<form id="comment-form" class="flex flex-col gap-4" onsubmit={handleSubmit}>
		<label>
			{#if errors.author}
				{#each errors.author as issue}
					<span class="text-sm text-red-500">{issue}</span>
				{/each}
			{/if}
			<input
				type="text"
				name="author"
				bind:value={author}
				placeholder="John Doe"
				disabled={isSubmitting}
			/>
			Author
		</label>
		<label>
			{#if errors.content}
				{#each errors.content as issue}
					<span class="text-sm text-red-500">{issue}</span>
				{/each}
			{/if}
			<textarea
				name="content"
				bind:value={content}
				placeholder="Write something nice :)"
				disabled={isSubmitting}
			></textarea>
			Content
		</label>
		{#if submitError}
			<p class="text-sm text-red-500">{submitError}</p>
		{/if}
		<Button type="submit" text={isSubmitting ? 'Posting...' : 'Submit'} />
	</form>

	{#if isLoading}
		<p class="text-center opacity-50">Loading comments...</p>
	{:else if comments.length === 0}
		<p class="text-center opacity-50">No comments yet. Be the first!</p>
	{:else}
		{#each comments as comment}
			<div class="mx-auto w-full max-w-3xl border border-white p-4">
				<p class="font-bold">{comment.author}</p>
				<p>{comment.content}</p>
			</div>
		{/each}
	{/if}
</div>
