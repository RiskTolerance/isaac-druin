import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { eq } from 'drizzle-orm';
import { comment } from '$server/db/schema';
import { db } from '$server/db';
import { moderateComment } from '$remotes/groq';
import { commentFormSchema } from '$lib/schemas/comment';

// GET /api/comments?slug=xxx
export const GET: RequestHandler = async ({ url }) => {
	const slug = url.searchParams.get('slug');
	if (!slug) {
		return json({ error: 'slug required' }, { status: 400 });
	}

	const res = await db.select().from(comment).where(eq(comment.slug, slug));
	return json(res);
};

// POST /api/comments
export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	const parsed = commentFormSchema.safeParse(data);

	if (!parsed.success) {
		return json({ error: parsed.error.flatten() }, { status: 400 });
	}

	const { slug, author, content } = parsed.data;

	// Auto-moderate
	const moderate = await moderateComment({ author, content });
	if (moderate.violates_policy) {
		return json({ error: `Comment rejected: ${moderate.primary_reason}` }, { status: 400 });
	}

	const res = await db.insert(comment).values({ slug, author, content });
	return json({ success: true, result: res });
};

