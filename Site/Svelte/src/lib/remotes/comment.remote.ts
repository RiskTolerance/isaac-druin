import { query, form } from '$app/server';
import { eq } from 'drizzle-orm';
import { comment } from '$server/db/schema';
import { db } from '$server/db';
import { moderateComment } from '$remotes/groq';
import * as z from 'zod/v4-mini';

export const getComment = query(z.string(), async (slug) => {
	const res = await db.select().from(comment).where(eq(comment.slug, slug));
	return res;
});

export const postComment = form(
	z.object({
		slug: z.string(),
		author: z.string().check(z.minLength(3), z.maxLength(30), z.trim()),
		content: z.string().check(z.minLength(10), z.maxLength(1000), z.trim())
	}),
	async ({ slug, author, content }) => {
		if (!slug || !author || !content) {
			throw new Error('Invalid comment data');
		}

		// auto-moderate
		try {
			const moderate = await moderateComment({ author, content });
			if (moderate instanceof Error) {
				throw new Error('Error moderating comment');
			}
			if (moderate.violates_policy) {
				throw new Error('Comment violates policy');
			}
		} catch (error) {
			console.error('Comment moderation error:', error);
			throw new Error('Error moderating comment');
		}

		const res = await db.insert(comment).values({
			slug,
			author,
			content
		});
		return res;
	}
);
