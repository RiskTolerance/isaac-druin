import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import {createInsertSchema, createSelectSchema} from 'drizzle-zod';
import * as z from 'zod/v4';

export const comment = sqliteTable('comments', {
	id: text('id')
	.primaryKey().$defaultFn(() => crypto.randomUUID()),
	author: text('author').notNull(),
	content: text('content').notNull(),
	slug: text('slug').notNull(),
	createdAt: integer('created_at').notNull().$defaultFn(() => Date.now()),
})

export const selectCommentSchema = createSelectSchema(comment);
export const insertCommentSchema = createInsertSchema(comment, {
	author: z.string().min(3).max(30).trim(),
	content: z.string().min(10).max(1000).trim(),
	slug: z.string().min(1).max(255).trim(),
});