// src/components/sections/SummarySection.tsx
import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import {heroTheme} from "../../styles/themes/heroTheme";

interface SummarySectionProps {
    summary: string;
}

const SummarySection: React.FC<SummarySectionProps> = ({ summary }) => {
    const { theme } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
        >
            <Box mb={4}>
                <Typography variant="h4" gutterBottom>
                    {theme === heroTheme ? "Hero's Mission Statement" : "Villain's Manifesto"}
                </Typography>
                <Typography variant="body1">
                    {summary}
                </Typography>
            </Box>
        </motion.div>
    );
};

export default SummarySection;