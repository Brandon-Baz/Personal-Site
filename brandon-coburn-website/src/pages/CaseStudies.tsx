import React from 'react';
  import Section from '../ui/Section';
  import CaseStudy from '../ui/CaseStudy';

  const CaseStudies: React.FC = () => {
    const caseStudies = [
      { 
        id: 1, 
        title: 'Optimizing Legacy System Performance', 
        challenge: 'A large e-commerce platform was experiencing significant slowdowns during peak hours.',
        solution: 'Implemented caching strategies and optimized database queries, resulting in a 70% improvement in response times.',
        technologies: ['Redis', 'PostgreSQL', 'Node.js']
      },
      { 
        id: 2, 
        title: 'Scalable Microservices Architecture', 
        challenge: 'A startup needed to transition from a monolithic architecture to microservices to support rapid growth.',
        solution: 'Designed and implemented a microservices architecture using Docker and Kubernetes, improving scalability and deployment efficiency.',
        technologies: ['Docker', 'Kubernetes', 'Go', 'gRPC']
      },
    ];

    return (
      <div className="game-page">
        <Section title="Case Studies">
          {caseStudies.map(study => (
            <CaseStudy key={study.id} {...study} />
          ))}
        </Section>
      </div>
    );
  };

  export default CaseStudies;