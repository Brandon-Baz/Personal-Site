import React from 'react';
import '../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="game-footer">
      <p>&copy; 2024 Brandon Coburn. All rights reserved.</p>
      <div className="social-links">
        <a href="#" className="social-link">GitHub</a>
        <a href="#" className="social-link">LinkedIn</a>
        <a href="#" className="social-link">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;