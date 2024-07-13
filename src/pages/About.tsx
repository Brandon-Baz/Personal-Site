import React from 'react';
  import Section from '../ui/Section';

  const About: React.FC = () => {
    return (
      <div className="game-page">
        <Section title="Values and Work Philosophy">
          <p>My approach to software development is rooted in clean architecture principles and best practices. I believe in writing maintainable, scalable code that solves real-world problems.</p>
          <p>Key aspects of my work philosophy include:</p>
          <ul className="pixel-list">
            <li>Emphasis on code quality and readability</li>
            <li>Continuous learning and improvement</li>
            <li>Collaborative problem-solving</li>
            <li>Agile methodologies</li>
            <li>User-centric design</li>
          </ul>
          <p>My military background has instilled in me a strong work ethic, attention to detail, and ability to perform under pressure. These qualities, combined with my technical skills, allow me to tackle complex challenges effectively.</p>
        </Section>
      </div>
    );
  };

  export default About;