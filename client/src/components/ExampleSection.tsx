import { motion } from 'framer-motion';
import { Example } from '@shared/schema';

interface ExampleSectionProps {
  examples: Example[];
  color: string;
}

export function ExampleSection({ examples, color }: ExampleSectionProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center font-['Poppins']">
        <i className="fas fa-lightbulb text-yellow-500 mr-3"></i>
        Step-by-Step Examples
      </h2>
      
      <div className="space-y-8">
        {examples.map((example, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`border-l-4 border-${color} pl-6`}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{example.title}</h3>
            {example.problem && (
              <p className="text-gray-600 mb-3 italic">{example.problem}</p>
            )}
            <div className="space-y-2 text-gray-700">
              {example.steps.map((step, stepIndex) => (
                <div key={stepIndex}>
                  <p>
                    <strong>Step {stepIndex + 1}:</strong> {step.description}
                  </p>
                  {step.calculation && (
                    <p className="ml-4 font-mono text-blue-600">{step.calculation}</p>
                  )}
                </div>
              ))}
              <p className="mt-4">
                <strong>Answer:</strong> <span className={`font-semibold text-${color}`}>{example.answer}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
