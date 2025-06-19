import { useState, useMemo } from 'react';
import { mathContent } from '@/data/mathContent';

interface SearchResult {
  topic: string;
  type: 'definition' | 'example' | 'question';
  title: string;
  content: string;
  relevance: number;
}

export function useSearch() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase().trim();
    const searchResults: SearchResult[] = [];

    Object.entries(mathContent).forEach(([topicSlug, content]) => {
      // Search definitions
      content.definitions.forEach(def => {
        const relevance = calculateRelevance(searchTerm, def.term, def.definition);
        if (relevance > 0) {
          searchResults.push({
            topic: topicSlug,
            type: 'definition',
            title: def.term,
            content: def.definition,
            relevance
          });
        }
      });

      // Search examples
      content.examples.forEach(example => {
        const relevance = calculateRelevance(searchTerm, example.title, example.problem);
        if (relevance > 0) {
          searchResults.push({
            topic: topicSlug,
            type: 'example',
            title: example.title,
            content: example.problem,
            relevance
          });
        }
      });

      // Search questions
      content.questions.forEach(question => {
        const relevance = calculateRelevance(searchTerm, '', question.question);
        if (relevance > 0) {
          searchResults.push({
            topic: topicSlug,
            type: 'question',
            title: 'Practice Question',
            content: question.question,
            relevance
          });
        }
      });
    });

    return searchResults
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 10); // Limit to top 10 results
  }, [query]);

  return { query, setQuery, results };
}

function calculateRelevance(searchTerm: string, title: string, content: string): number {
  let relevance = 0;
  const titleLower = title.toLowerCase();
  const contentLower = content.toLowerCase();

  // Exact title match gets highest score
  if (titleLower === searchTerm) relevance += 100;
  
  // Title contains search term
  if (titleLower.includes(searchTerm)) relevance += 50;
  
  // Content contains search term
  if (contentLower.includes(searchTerm)) relevance += 25;
  
  // Word boundary matches in title get bonus
  const titleWords = titleLower.split(/\s+/);
  const searchWords = searchTerm.split(/\s+/);
  
  searchWords.forEach(word => {
    if (titleWords.includes(word)) relevance += 10;
  });

  return relevance;
}
