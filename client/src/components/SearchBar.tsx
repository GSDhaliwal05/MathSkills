import { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearch } from '@/hooks/useSearch';
import { topicInfo } from '@/data/mathContent';

interface SearchBarProps {
  isMobile?: boolean;
}

export function SearchBar({ isMobile = false }: SearchBarProps) {
  const { query, setQuery, results } = useSearch();
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    setIsOpen(value.length > 0);
  };

  return (
    <div ref={searchRef} className={`relative ${isMobile ? 'w-full' : 'w-64'}`}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search concepts..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsOpen(query.length > 0)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border max-h-96 overflow-y-auto z-50"
          >
            <div className="py-2">
              {results.map((result, index) => {
                const topicTitle = topicInfo[result.topic as keyof typeof topicInfo]?.title || result.topic;
                return (
                  <Link
                    key={index}
                    href={`/${result.topic}`}
                    className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b last:border-b-0"
                    onClick={() => {
                      setIsOpen(false);
                      setQuery('');
                    }}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <span className={`inline-block px-2 py-1 text-xs rounded-full text-white ${
                          result.type === 'definition' ? 'bg-blue-500' :
                          result.type === 'example' ? 'bg-green-500' : 'bg-purple-500'
                        }`}>
                          {result.type}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {result.title}
                        </p>
                        <p className="text-xs text-gray-500 mb-1">{topicTitle}</p>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {result.content}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            {results.length === 0 && query && (
              <div className="px-4 py-3 text-gray-500 text-center">
                No results found for "{query}"
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
