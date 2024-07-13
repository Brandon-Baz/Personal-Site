import React from 'react';
  import Section from '../ui/Section';
  import Timeline from '../ui/Timeline';

  const Career: React.FC = () => {
    const timelineEvents = [
      { date: '2015-2019', title: 'Military Service', description: 'Served in the armed forces, developing leadership and problem-solving skills.' },
      { date: '2019-2020', title: 'Transition to Tech', description: 'Completed intensive coding bootcamp and self-study in software engineering.' },
      { date: '2020-2021', title: 'Junior Software Engineer', description: 'First role in tech industry, focusing on backend development with Python.' },
      { date: '2021-2023', title: 'Software Engineer', description: 'Expanded skills to full-stack development, working with React and Node.js.' },
      { date: '2023-Present', title: 'Senior Software Engineer', description: 'Leading projects and mentoring junior developers, specializing in clean architecture and best practices.' },
    ];

    return (
      <div className="game-page">
        <Section title="Career Timeline">
          <Timeline events={timelineEvents} />
        </Section>
      </div>
    );
  };

  export default Career;