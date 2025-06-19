import { motion } from 'framer-motion';
import { DefinitionCard } from '@/components/DefinitionCard';
import { ExampleSection } from '@/components/ExampleSection';
import { PracticeQuestion } from '@/components/PracticeQuestion';
import { mathContent } from '@/data/mathContent';

export default function Data() {
  const content = mathContent.data;

  return (
    <div>
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-2xl p-8 mb-8"
      >
        <h1 className="text-4xl font-bold mb-4 font-['Poppins']">Data Management</h1>
        <p className="text-xl opacity-90">Surveys, graphs, charts, and data analysis</p>
      </motion.div>

      {/* Key Terms */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl p-8 shadow-lg mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center font-['Poppins']">
          <i className="fas fa-book text-yellow-500 mr-3"></i>
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

      {/* Graph Examples */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl p-8 shadow-lg mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center font-['Poppins']">
          <i className="fas fa-chart-line text-yellow-500 mr-3"></i>
          Types of Graphs
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Business charts and data visualization on computer screen" 
              className="rounded-lg shadow-md w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Bar and Line Graphs</h3>
            <p className="text-gray-600">Compare categories and show trends over time</p>
          </div>
          
          <div className="text-center">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Pie charts and statistical data on business reports" 
              className="rounded-lg shadow-md w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">Circle Graphs</h3>
            <p className="text-gray-600">Show parts of a whole as percentages</p>
          </div>
        </div>
      </motion.div>

      {/* Examples */}
      <ExampleSection examples={content.examples} color="yellow-500" />

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
              color="yellow-500"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
