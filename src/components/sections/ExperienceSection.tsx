// src/components/sections/ExperienceSection.tsx
import React from 'react';
import { Typography, Box, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { Experience } from '../../types/data';

interface ExperienceSectionProps {
    experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
    return (
        <Box>
            <Box display="flex" alignItems="center" mb={2}>
                <FaBriefcase style={{ marginRight: '10px' }} />
                <Typography variant="h4">Experience</Typography>
            </Box>
            {experiences.map((exp, index) => (
                <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <Card variant="outlined" sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {exp.position}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {exp.company}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {exp.duration}
                            </Typography>
                            <ul>
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </Box>
    );
};

export default ExperienceSection;