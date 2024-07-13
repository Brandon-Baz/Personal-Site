import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/personal_brand_logo.png';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`game-header ${theme}`}>
        <svg style={{ display: 'none' }}>
    <symbol id="icon-superhero" viewBox="0 0 24 24">
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
    </symbol>
    <symbol id="icon-villain" viewBox="0 0 24 24">
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M9,9V15H15V9" />
    </symbol>
  </svg>
      <div className="header-content">
        <img src={logo} alt="Personal Brand Logo" className="logo" />
        <div className="header-text">
          <h1 className="game-title">Brandon Coburn</h1>
          <h2 className="game-subtitle">
            <span className="job-title">Software Engineer |</span>
            <span className="veteran-title"> Veteran |</span>
            <span className="founder-title"> Founder of Bazinga Studios</span>
          </h2>
        </div>
      </div>
      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/case-studies" className="nav-link">Case Studies</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/learning" className="nav-link">Learning</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <ThemeToggle />
        <button onClick={toggleMenu} className="theme-toggle">
          {theme === 'superhero' ? 'Go Villain' : 'Go Hero'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
