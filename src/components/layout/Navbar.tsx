import React from 'react';
import { Link } from 'react-router-dom';
import {useTheme} from "../../contexts/ThemeContext";

const Navbar: React.FC = () => {
  const  { theme } = useTheme();

  return (
    <nav className={`navbar ${theme}`}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;