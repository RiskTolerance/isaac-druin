import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const comment = sqliteTable('comments', {
	id: text('id')
	.primaryKey().$defaultFn(() => crypto.randomUUID()),
	author: text('author').notNull(),
	content: text('content').notNull(),
	slug: text('slug').notNull(),
	createdAt: integer('created_at').notNull().$defaultFn(() => Date.now()),
})