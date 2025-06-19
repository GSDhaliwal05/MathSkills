import { Link } from 'wouter';
import { motion } from 'framer-motion';

interface TopicCardProps {
  slug: string;
  title: string;
  description: string;
  icon: string;
  colorGradient: string;
  index: number;
}

export function TopicCard({ slug, title, description, icon, colorGradient, index }: TopicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="topic-card"
    >
      <Link href={`/${slug}`}>
        <div className={`w-12 h-12 bg-gradient-to-br ${colorGradient} rounded-lg flex items-center justify-center mb-4`}>
          <i className={`${icon} text-white text-xl`}></i>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 font-['Poppins']">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </Link>
    </motion.div>
  );
}
