import React from 'react';
import { motion } from 'framer-motion';

interface LearningItemProps {
  title: string;
  type: string;
  platform: string;
  completionDate?: string;
  inProgress?: boolean;
}

const LearningItem: React.FC<LearningItemProps> = ({
  title,
  type,
  platform,
  completionDate,
  inProgress
}) => {
  return (
    <motion.div 
      className="learning-item game-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="learning-item-title">{title}</h3>
      <div className="learning-item-details">
        <p><strong>Type:</strong> {type}</p>
        <p><strong>Platform:</strong> {platform}</p>
        {completionDate && (
          <p><strong>Completed:</strong> {new Date(completionDate).toLocaleDateString()}</p>
        )}
        {inProgress && (
          <p className="in-progress">In Progress</p>
        )}
      </div>
      <div className="learning-item-icon">
        {type === 'Course' && <span role="img" aria-label="Course">📚</span>}
        {type === 'Certification' && <span role="img" aria-label="Certification">🏆</span>}
        {type === 'Self-study' && <span role="img" aria-label="Self-study">🧠</span>}
      </div>
    </motion.div>
  );
};

export default LearningItem;
