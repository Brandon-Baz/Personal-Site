// src/components/InterestPanel.tsx
import React from 'react';
import { motion } from 'framer-motion';

import CustomIllustration from '../common/CustomIllustration';
import {ThemeMode} from "../../types/Theme";

interface InterestPanelProps {
    title: string;
    description: string;
    icon: string;
    theme: ThemeMode;
}

export const InterestPanel: React.FC<InterestPanelProps> = ({ title, description, icon, theme }) => {
    return (
        <motion.div
            className={`interest-panel ${theme}`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <CustomIllustration name={icon} theme={theme} />
            <h3>{title}</h3>
            <p>{description}</p>
        </motion.div>
    );
};
