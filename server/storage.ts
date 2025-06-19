import { 
  mathTopics, 
  searchableContent, 
  users,
  type MathTopic, 
  type InsertMathTopic, 
  type SearchableContent, 
  type InsertSearchableContent,
  type User,
  type UpsertUser
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User operations for authentication
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  // Math content operations
  getMathTopics(): Promise<MathTopic[]>;
  getMathTopicBySlug(slug: string): Promise<MathTopic | undefined>;
  searchContent(query: string): Promise<SearchableContent[]>;
  createMathTopic(topic: InsertMathTopic): Promise<MathTopic>;
  createSearchableContent(content: InsertSearchableContent): Promise<SearchableContent>;
}

export class DatabaseStorage implements IStorage {
  // User operations for authentication
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Math content operations
  async getMathTopics(): Promise<MathTopic[]> {
    return await db.select().from(mathTopics);
  }

  async getMathTopicBySlug(slug: string): Promise<MathTopic | undefined> {
    const [topic] = await db.select().from(mathTopics).where(eq(mathTopics.slug, slug));
    return topic;
  }

  async searchContent(query: string): Promise<SearchableContent[]> {
    const results = await db.select().from(searchableContent);
    const lowerQuery = query.toLowerCase();
    
    return results.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) ||
      item.content.toLowerCase().includes(lowerQuery) ||
      (item.searchTerms && item.searchTerms.some(term => term?.toLowerCase().includes(lowerQuery)))
    );
  }

  async createMathTopic(insertTopic: InsertMathTopic): Promise<MathTopic> {
    const [topic] = await db.insert(mathTopics).values(insertTopic).returning();
    return topic;
  }

  async createSearchableContent(insertContent: InsertSearchableContent): Promise<SearchableContent> {
    const [content] = await db.insert(searchableContent).values(insertContent).returning();
    return content;
  }
}

export const storage = new DatabaseStorage();
