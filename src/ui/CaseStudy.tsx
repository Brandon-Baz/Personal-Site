import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CaseStudyProps {
  id: number;
  title: string;
  challenge: string;
  solution: string;
  technologies: string[];
}

const CaseStudy: React.FC<CaseStudyProps> = ({ id, title, challenge, solution, technologies }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="case-study"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>{title}</h3>
      <button className="game-button" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Hide Details' : 'Show Details'}
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <h4>Challenge:</h4>
            <p>{challenge}</p>
            <h4>Solution:</h4>
            <p>{solution}</p>
            <h4>Technologies Used:</h4>
            <ul>
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CaseStudy;
