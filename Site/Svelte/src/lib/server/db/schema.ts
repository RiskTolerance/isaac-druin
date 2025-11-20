import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import {createInsertSchema, createSelectSchema} from 'drizzle-zod';
import { commentFormSchema } from '$lib/schemas/comment';

export const comment = sqliteTable('comments', {
	id: text('id')
	.primaryKey().$defaultFn(() => crypto.randomUUID()),
	author: text('author').notNull(),
	content: text('content').notNull(),
	slug: text('slug').notNull(),
	createdAt: integer('created_at').notNull().$defaultFn(() => Date.now()),
})

export const selectCommentSchema = createSelectSchema(comment);

// Use shared schema for validation - extract individual field validations
export const insertCommentSchema = createInsertSchema(comment, {
	author: commentFormSchema.shape.author,
	content: commentFormSchema.shape.content,
	slug: commentFormSchema.shape.slug,
});