// src/components/ComicPanel.tsx
import React from 'react';
import { motion } from 'framer-motion';
import {ThemeMode} from "../../types/Theme";

interface ComicPanelProps {
    title: string;
    content: string;
    image: string;
    theme: ThemeMode;
}

const ComicPanel: React.FC<ComicPanelProps> = ({ title, content, image, theme }) => {
    return (
        <motion.div
            className={`comic-panel ${theme}`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <h3>{title}</h3>
            <div className="panel-content">
                <img src={image} alt={title} />
                <p>{content}</p>
            </div>
        </motion.div>
    );
};

export default ComicPanel;