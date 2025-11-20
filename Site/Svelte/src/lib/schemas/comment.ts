import * as z from 'zod/v4';

/**
 * Shared validation schema for comment form fields.
 * Used for both server-side validation (via drizzle-zod) and client-side preflight validation.
 */
export const commentFormSchema = z.object({
	slug: z.string().min(1).max(255).trim(),
	author: z
		.string()
		.min(3, 'Author name must be at least 3 characters')
		.max(30, 'Author name must be at most 30 characters')
		.trim(),
	content: z
		.string()
		.min(10, 'Comment must be at least 10 characters')
		.max(1000, 'Comment must be at most 1000 characters')
		.trim()
});

