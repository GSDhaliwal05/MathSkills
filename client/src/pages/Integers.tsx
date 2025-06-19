import { motion } from 'framer-motion';
import { DefinitionCard } from '@/components/DefinitionCard';
import { ExampleSection } from '@/components/ExampleSection';
import { PracticeQuestion } from '@/components/PracticeQuestion';
import { mathContent } from '@/data/mathContent';

export default function Integers() {
  const content = mathContent.integers;

  return (
    <div>
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-8 mb-8"
      >
        <h1 className="text-4xl font-bold mb-4 font-['Poppins']">Integers</h1>
        <p className="text-xl opacity-90">Operations with integers, BEDMAS, and integer rules</p>
      </motion.div>

      {/* Key Terms */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl p-8 shadow-lg mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center font-['Poppins']">
          <i className="fas fa-book text-red-500 mr-3"></i>
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

      {/* Integer Rules */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl p-8 shadow-lg mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center font-['Poppins']">
          <i className="fas fa-rules text-red-500 mr-3"></i>
          Integer Operation Rules
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Addition Rules</h3>
            <div className="space-y-2 text-gray-700">
              <p>• Same signs: Add and keep the sign</p>
              <p className="ml-4">Example: (+3) + (+5) = +8</p>
              <p className="ml-4">Example: (-4) + (-2) = -6</p>
              <p>• Different signs: Subtract and use sign of larger number</p>
              <p className="ml-4">Example: (+7) + (-3) = +4</p>
              <p className="ml-4">Example: (-8) + (+5) = -3</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Multiplication Rules</h3>
            <div className="space-y-2 text-gray-700">
              <p>• Same signs: Result is positive</p>
              <p className="ml-4">Example: (+3) × (+4) = +12</p>
              <p className="ml-4">Example: (-3) × (-4) = +12</p>
              <p>• Different signs: Result is negative</p>
              <p className="ml-4">Example: (+3) × (-4) = -12</p>
              <p className="ml-4">Example: (-3) × (+4) = -12</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Examples */}
      <ExampleSection examples={content.examples} color="red-500" />

      {/* Practice Questions */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
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
              color="red-500"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
