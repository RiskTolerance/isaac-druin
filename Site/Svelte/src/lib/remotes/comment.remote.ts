// spell-checker: disable
import { query, form } from '$app/server';
import { eq } from 'drizzle-orm';
import { comment } from '$server/db/schema';
import { db } from '$server/db';
import { moderateComment } from '$remotes/groq';
import * as z from 'zod/v4';
import { insertCommentSchema } from '$server/db/schema';

export const getComment = query(z.string(), async (slug) => {
	const res = await db.select().from(comment).where(eq(comment.slug, slug));
	return res;
});

// posting comment
// Use insertCommentSchema directly - form() handles validation
export const postComment = form(
	insertCommentSchema.pick({ slug: true, author: true, content: true }),
	async ({ slug, author, content }) => {
		// auto-moderate
		const moderate = await moderateComment({ author, content });
		if (moderate.violates_policy) {
			throw new Error(`Comment rejected: ${moderate.primary_reason}`);
		}

		const res = await db.insert(comment).values({
			slug,
			author,
			content
		});
		return res;
	}
);
