import { motion } from 'framer-motion';
import { DefinitionCard } from '@/components/DefinitionCard';
import { ExampleSection } from '@/components/ExampleSection';
import { PracticeQuestion } from '@/components/PracticeQuestion';
import { mathContent } from '@/data/mathContent';

export default function Algebra() {
  const content = mathContent.algebra;

  return (
    <div>
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl p-8 mb-8"
      >
        <div className="flex items-center mb-4">
          {/* Algebra Logo */}
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mr-6">
            <svg width="48" height="48" viewBox="0 0 48 48" className="text-white">
              <path fill="currentColor" d="M8 36h32v-4H8v4zm0-8h32v-4H8v4zm0-12v4h32v-4H8z"/>
              <text x="24" y="32" textAnchor="middle" className="text-lg font-bold fill-white">
                x²
              </text>
            </svg>
          </div>
          <div>
            <h1 className="text-4xl font-bold font-['Poppins']">Algebra</h1>
            <p className="text-xl opacity-90">Expressions, solving equations, and graphing linear equations</p>
          </div>
        </div>
      </motion.div>

      {/* Key Terms */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl p-8 shadow-lg mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center font-['Poppins']">
          <i className="fas fa-book text-purple-500 mr-3"></i>
          Key Terms
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {content.definitions.map((def, index) => (
            <DefinitionCard 
              key={index}
              term={def.term}
              definition={def.definition}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      {/* Examples */}
      <ExampleSection examples={content.examples} color="purple-500" />

      {/* Practice Questions */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center font-['Poppins']">
          <i className="fas fa-pencil-alt text-red-500 mr-3"></i>
          Practice Questions
        </h2>
        
        <div className="space-y-6">
          {content.questions.map((question, index) => (
            <PracticeQuestion
              key={question.id}
              question={question}
              index={index}
              color="purple-500"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
