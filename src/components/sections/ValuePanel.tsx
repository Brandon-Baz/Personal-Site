// src/components/ValuePanel.tsx
import React from 'react';
import { motion } from 'framer-motion';
import CustomIllustration from '../common/CustomIllustration';
import {ThemeMode} from "../../types/Theme";

interface ValuePanelProps {
    title: string;
    description: string;
    icon: string;
    theme: ThemeMode;
}

const ValuePanel: React.FC<ValuePanelProps> = ({ title, description, icon, theme }) => {
    return (
        <motion.div
            className={`value-panel ${theme}`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <CustomIllustration name={icon} theme={theme} />
            <h3>{title}</h3>
            <p>{description}</p>
        </motion.div>
    );
};

export default ValuePanel;