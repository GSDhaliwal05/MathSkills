import { pgTable, text, serial, integer, boolean, jsonb, varchar, timestamp, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table for authentication
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table for authentication
export const users = pgTable("users", {
  id: varchar("id").primaryKey().notNull(),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const mathTopics = pgTable("math_topics", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  color: text("color").notNull(),
  content: jsonb("content").notNull(),
});

export const searchableContent = pgTable("searchable_content", {
  id: serial("id").primaryKey(),
  topicSlug: text("topic_slug").notNull(),
  type: text("type").notNull(), // 'definition', 'example', 'question'
  title: text("title").notNull(),
  content: text("content").notNull(),
  searchTerms: text("search_terms").array(),
});

export const insertMathTopicSchema = createInsertSchema(mathTopics).omit({
  id: true,
});

export const insertSearchableContentSchema = createInsertSchema(searchableContent).omit({
  id: true,
});

export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;
export type MathTopic = typeof mathTopics.$inferSelect;
export type InsertMathTopic = z.infer<typeof insertMathTopicSchema>;
export type SearchableContent = typeof searchableContent.$inferSelect;
export type InsertSearchableContent = z.infer<typeof insertSearchableContentSchema>;

export interface TopicContent {
  definitions: Definition[];
  examples: Example[];
  questions: Question[];
}

export interface Definition {
  term: string;
  definition: string;
}

export interface Example {
  title: string;
  problem: string;
  steps: Step[];
  answer: string;
}

export interface Step {
  description: string;
  calculation?: string;
}

export interface Question {
  id: string;
  question: string;
  answer: string;
  explanation: string;
}
