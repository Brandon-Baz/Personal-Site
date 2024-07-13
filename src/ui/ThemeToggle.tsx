import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="game-button theme-toggle" aria-label="Toggle theme">
      {theme === 'superhero' ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeToggle;
