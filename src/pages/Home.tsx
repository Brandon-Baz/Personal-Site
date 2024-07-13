import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';

const Home: React.FC = () => {
  return (
    <div className="game-page home-page">
      <Section title="Welcome to My Personal Page">
        <p>Hi, I'm Brandon Coburn, a software engineer with a passion for leveraging AI and modern technologies to solve complex problems. Explore my work and learn more about my journey from the military to software engineering.</p>
        <div className="home-links">
          <Link to="/case-studies" className="game-button">Case Studies</Link>
          <Link to="/blog" className="game-button">Technical Blog</Link>
          <Link to="/contact" className="game-button">Contact Me</Link>
        </div>
      </Section>
    </div>
  );
};

export default Home;
