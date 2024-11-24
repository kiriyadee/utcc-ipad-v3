import { sql, relations } from "drizzle-orm";
import {
  pgTable,
  text,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";
import { uuidv7 } from "uuidv7";


export const posts = pgTable(
  "posts",
  {
    id: text("id").primaryKey().$defaultFn(() => uuidv7()),
    title: text("title"),
    content: text("content"),
    isDraft: boolean("is_draft"),
    publishedAt: timestamp("published_at"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  }
)

export type Post = typeof posts.$inferSelect;

export const postsRelations = relations(posts, ({ one, many }) => ({
}));