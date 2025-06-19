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
  const [userAnswer, setUserAnswer] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = () => {
    if (userAnswer.trim()) {
      setHasSubmitted(true);
      setShowAnswer(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const isCorrect = hasSubmitted && userAnswer.trim().toLowerCase() === question.answer.toLowerCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border rounded-lg p-6 bg-gray-50"
    >
      <p className="font-medium text-gray-800 mb-4">
        {index + 1}. {question.question}
      </p>
      
      {/* Answer Input Section */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Answer:
        </label>
        <div className="flex space-x-3">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your answer here..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={hasSubmitted}
          />
          <button
            onClick={handleSubmit}
            disabled={!userAnswer.trim() || hasSubmitted}
            className={`px-4 py-2 rounded-lg text-white font-medium transition-colors ${
              !userAnswer.trim() || hasSubmitted 
                ? 'bg-gray-400 cursor-not-allowed' 
                : `bg-${color} hover:opacity-90`
            }`}
          >
            Submit
          </button>
        </div>
        
        {hasSubmitted && (
          <div className="mt-2">
            {isCorrect ? (
              <p className="text-green-600 font-medium flex items-center">
                <i className="fas fa-check-circle mr-2"></i>
                Correct! Well done!
              </p>
            ) : (
              <p className="text-red-600 font-medium flex items-center">
                <i className="fas fa-times-circle mr-2"></i>
                Not quite right. Check the answer below.
              </p>
            )}
          </div>
        )}
      </div>

      {!hasSubmitted && (
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="text-gray-600 hover:text-gray-800 underline text-sm"
        >
          Skip and show answer
        </button>
      )}
      
      <AnimatePresence>
        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 200 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.3 }}
            className={`mt-4 p-4 bg-white rounded-lg border-l-4 border-${color} overflow-hidden`}
          >
            <p className={`font-semibold text-${color} mb-2`}>Correct Answer: {question.answer}</p>
            <p className="text-gray-700">{question.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
