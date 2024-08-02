import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/Resume.css';
import {heroTheme} from "../styles/theme/theme";

interface SkillsViewToggleProps {
    view: 'bars' | 'cards';
    setView: (view: 'bars' | 'cards') => void;
}

const SkillsViewToggle: React.FC<SkillsViewToggleProps> = ({ view, setView }) => {
    const { theme } = useTheme();
    const isHero = theme === heroTheme;

    return (
        <div className="skills-view-toggle">
            <motion.button
                className={`view-button ${view === 'bars' ? 'active' : ''} ${isHero ? 'hero' : 'villain'}`}
                onClick={() => setView('bars')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Bar View
            </motion.button>
            <motion.button
                className={`view-button ${view === 'cards' ? 'active' : ''} ${isHero ? 'hero' : 'villain'}`}
                onClick={() => setView('cards')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Card View
            </motion.button>
        </div>
    );
};

export default SkillsViewToggle;