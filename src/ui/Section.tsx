import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {heroTheme} from "../styles/themes/heroTheme";

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    const { theme } = useTheme();
    const isHero = theme === heroTheme;

    return (
        <motion.section
            className={`comic-section ${isHero ? 'hero-section' : 'villain-section'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="comic-panel section-title-panel">
                <h2 className="section-title">{title}</h2>
            </div>
            <div className="comic-grid">
                {React.Children.map(children, (child, index) => (
                    <div key={index} className="comic-panel">
                        {child}
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default Section;