import { motion } from 'framer-motion';

interface DefinitionCardProps {
  term: string;
  definition: string;
  index: number;
}

export function DefinitionCard({ term, definition, index }: DefinitionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-50 rounded-lg p-4"
    >
      <h3 className="font-semibold text-blue-600 mb-2">{term}</h3>
      <p className="text-gray-700">{definition}</p>
    </motion.div>
  );
}
