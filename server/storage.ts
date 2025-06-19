import { mathTopics, searchableContent, type MathTopic, type InsertMathTopic, type SearchableContent, type InsertSearchableContent } from "@shared/schema";

export interface IStorage {
  getMathTopics(): Promise<MathTopic[]>;
  getMathTopicBySlug(slug: string): Promise<MathTopic | undefined>;
  searchContent(query: string): Promise<SearchableContent[]>;
  createMathTopic(topic: InsertMathTopic): Promise<MathTopic>;
  createSearchableContent(content: InsertSearchableContent): Promise<SearchableContent>;
}

export class MemStorage implements IStorage {
  private topics: Map<number, MathTopic>;
  private searchableItems: Map<number, SearchableContent>;
  private currentTopicId: number;
  private currentSearchId: number;

  constructor() {
    this.topics = new Map();
    this.searchableItems = new Map();
    this.currentTopicId = 1;
    this.currentSearchId = 1;
    this.initializeData();
  }

  private initializeData() {
    // Initialize with empty topics - content will be populated from frontend data
    const topicSlugs = [
      'numbers', 'exponents', 'integers', 'financial', 
      'data', 'fractions', 'algebra', 'measurements'
    ];
    
    topicSlugs.forEach(slug => {
      const topic: MathTopic = {
        id: this.currentTopicId++,
        slug,
        title: slug.charAt(0).toUpperCase() + slug.slice(1),
        description: `${slug} curriculum content`,
        icon: 'fas fa-calculator',
        color: '#4A90E2',
        content: { definitions: [], examples: [], questions: [] }
      };
      this.topics.set(topic.id, topic);
    });
  }

  async getMathTopics(): Promise<MathTopic[]> {
    return Array.from(this.topics.values());
  }

  async getMathTopicBySlug(slug: string): Promise<MathTopic | undefined> {
    return Array.from(this.topics.values()).find(topic => topic.slug === slug);
  }

  async searchContent(query: string): Promise<SearchableContent[]> {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.searchableItems.values()).filter(item => 
      item.title.toLowerCase().includes(lowerQuery) ||
      item.content.toLowerCase().includes(lowerQuery) ||
      (item.searchTerms && item.searchTerms.some(term => term.toLowerCase().includes(lowerQuery)))
    );
  }

  async createMathTopic(insertTopic: InsertMathTopic): Promise<MathTopic> {
    const id = this.currentTopicId++;
    const topic: MathTopic = { ...insertTopic, id };
    this.topics.set(id, topic);
    return topic;
  }

  async createSearchableContent(insertContent: InsertSearchableContent): Promise<SearchableContent> {
    const id = this.currentSearchId++;
    const content: SearchableContent = { ...insertContent, id };
    this.searchableItems.set(id, content);
    return content;
  }
}

export const storage = new MemStorage();
