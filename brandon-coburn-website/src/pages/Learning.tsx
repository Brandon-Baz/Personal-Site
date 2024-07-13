import React from 'react';
import Section from '../ui/Section';
import LearningItem from '../ui/LearningItem';

const Learning: React.FC = () => {
  const learningItems = [
    { id: 1, title: 'Advanced React Patterns', type: 'Course', platform: 'Frontend Masters', completionDate: '2024-03-15' },
    { id: 2, title: 'AWS Certified Solutions Architect', type: 'Certification', platform: 'Amazon Web Services', completionDate: '2023-11-30' },
    { id: 3, title: 'Rust Programming Language', type: 'Self-study', platform: 'The Rust Book', inProgress: true },
  ];

  return (
    <div className="game-page">
      <Section title="Learning Journey">
        {learningItems.map(item => (
          <LearningItem key={item.id} {...item} />
        ))}
      </Section>
    </div>
  );
};

export default Learning;