import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import profilePhoto from '../assets/personal_brand_logo.png';

const Home: React.FC = () => {
  return (
    <div className="game-page home-page">
      <Section title="Code Commander: From Military Might to Digital Dominance">
        <div className="hero-section">
          <img src={profilePhoto} alt="Brandon Coburn" className="profile-photo" />
          <div className="hero-content">
            <h2 className="tagline">Battling Bugs, Building Empires, and Birthing AI - The Multiverse Adventures of Brandon Coburn!</h2>
            <p>Hi, I'm Brandon Coburn, a software engineer with a passion for leveraging AI and modern technologies to solve complex problems. From military veteran to tech innovator, I'm on a mission to make the digital world a better place!</p>
          </div>
        </div>
        <div className="comic-panel">
          <h3>My Superpowers:</h3>
          <ul className="superpower-list">
            <li>Full-Stack Development</li>
            <li>AI Integration</li>
            <li>Problem-Solving</li>
            <li>Team Leadership</li>
          </ul>
        </div>
        <div className="home-links">
          <Link to="/case-studies" className="game-button">View My Heroic Feats</Link>
          <Link to="/blog" className="game-button">Read My Chronicles</Link>
          <Link to="/contact" className="game-button">Send a Signal</Link>
        </div>
      </Section>
    </div>
  );
};

export default Home;
