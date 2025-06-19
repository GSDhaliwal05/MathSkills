import { motion } from 'framer-motion';
import { DefinitionCard } from '@/components/DefinitionCard';
import { ExampleSection } from '@/components/ExampleSection';
import { PracticeQuestion } from '@/components/PracticeQuestion';
import { mathContent } from '@/data/mathContent';

export default function Measurements() {
  const content = mathContent.measurements;

  return (
    <div>
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-8 mb-8"
      >
        <h1 className="text-4xl font-bold mb-4 font-['Poppins']">Measurements</h1>
        <p className="text-xl opacity-90">Angles, circles, cylinders, and geometric measurements</p>
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

      {/* Angle Types */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl p-8 shadow-lg mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center font-['Poppins']">
          <i className="fas fa-drafting-compass text-red-500 mr-3"></i>
          Types of Angles
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-red-500 mb-2">Acute Angle</h3>
            <p className="text-gray-700">Less than 90°</p>
          </div>
          <div className="text-center bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-red-500 mb-2">Right Angle</h3>
            <p className="text-gray-700">Exactly 90°</p>
          </div>
          <div className="text-center bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-red-500 mb-2">Obtuse Angle</h3>
            <p className="text-gray-700">Greater than 90° but less than 180°</p>
          </div>
          <div className="text-center bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-red-500 mb-2">Straight Angle</h3>
            <p className="text-gray-700">Exactly 180°</p>
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
