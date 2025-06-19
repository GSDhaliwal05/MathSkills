import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '@shared/schema';

interface PracticeQuestionProps {
  question: Question;
  index: number;
  color: string;
}

export function PracticeQuestion({ question, index, color }: PracticeQuestionProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border rounded-lg p-6 bg-gray-50"
    >
      <p className="font-medium text-gray-800 mb-3">
        {index + 1}. {question.question}
      </p>
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className={`bg-${color} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-colors`}
      >
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </button>
      
      <AnimatePresence>
        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 200 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.3 }}
            className={`mt-4 p-4 bg-white rounded-lg border-l-4 border-${color} overflow-hidden`}
          >
            <p className={`font-semibold text-${color} mb-2`}>Answer: {question.answer}</p>
            <p className="text-gray-700">{question.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
