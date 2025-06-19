import { motion } from 'framer-motion';
import { TopicCard } from '@/components/TopicCard';
import { topicInfo } from '@/data/mathContent';

export default function Home() {
  const topics = Object.entries(topicInfo);

  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl text-white p-8 md:p-12 mb-12"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Poppins']">Welcome to Math Master</h1>
            <p className="text-xl opacity-90 mb-6">Your complete guide to Grade 7 mathematics. Master every concept with clear explanations, step-by-step examples, and engaging practice questions.</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/numbers'}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Learning
            </motion.button>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Students collaborating on math problems" 
              className="rounded-xl shadow-2xl max-w-full h-auto"
            />
          </div>
        </div>
      </motion.div>

      {/* Topics Grid */}
      <div className="mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold text-gray-800 mb-8 text-center font-['Poppins']"
        >
          Explore Grade 7 Math Topics
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map(([slug, info], index) => (
            <TopicCard
              key={slug}
              slug={slug}
              title={info.title}
              description={info.description}
              icon={info.icon}
              colorGradient={info.color}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white rounded-2xl p-8 shadow-lg"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-['Poppins']">About Math Master</h2>
            <p className="text-gray-600 mb-4">Math Master is designed specifically for Grade 7 students to build confidence and mastery in mathematics. Our comprehensive curriculum covers all essential topics with:</p>
            <ul className="space-y-2 text-gray-600">
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-center space-x-3"
              >
                <i className="fas fa-check-circle text-green-500"></i>
                <span>Clear definitions and explanations</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center space-x-3"
              >
                <i className="fas fa-check-circle text-green-500"></i>
                <span>Step-by-step worked examples</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center space-x-3"
              >
                <i className="fas fa-check-circle text-green-500"></i>
                <span>Interactive practice questions</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="flex items-center space-x-3"
              >
                <i className="fas fa-check-circle text-green-500"></i>
                <span>Mobile-friendly design</span>
              </motion.li>
            </ul>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Mathematical equations and formulas on a blackboard" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
