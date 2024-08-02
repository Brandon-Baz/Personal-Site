import React from 'react';
import { motion } from 'framer-motion';

interface AboutMeProps {
    content: string;
    theme: 'hero' | 'villain' | 'secret_identity';
}

const AboutMe: React.FC<AboutMeProps> = ({ content, theme }) => {
    return (
        <motion.div
            className={`about-me ${theme}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>About Me</h2>
            <p>{content}</p>
        </motion.div>
    );
};

export default AboutMe;