// src/components/sections/EducationSection.tsx
import React, { useState } from 'react';
import { Typography, Box, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaChevronDown } from 'react-icons/fa';
import { Education } from '../../types/data';

interface EducationSectionProps {
    education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
    const [expandedCourses, setExpandedCourses] = useState<string[]>([]);

    const toggleCourseExpansion = (category: string) => {
        setExpandedCourses(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    return (
        <Box>
            <Box display="flex" alignItems="center" mb={2}>
                <FaGraduationCap style={{ marginRight: '10px' }} />
                <Typography variant="h4">Education</Typography>
            </Box>
            {education.map((edu, index) => (
                <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <Card variant="outlined" sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {edu.degree}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {edu.institution}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {edu.year}
                            </Typography>
                            <ul>
                                {edu.honors.map((honor, i) => (
                                    <li key={i}>{honor}</li>
                                ))}
                            </ul>
                            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Coursework</Typography>
                            {Object.entries(edu.coursework).map(([category, courses]) => (
                                <Accordion
                                    key={category}
                                    expanded={expandedCourses.includes(category)}
                                    onChange={() => toggleCourseExpansion(category)}
                                >
                                    <AccordionSummary expandIcon={<FaChevronDown />}>
                                        <Typography>{category}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ul>
                                            {courses.map((course, i) => (
                                                <li key={i}>{course}</li>
                                            ))}
                                        </ul>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </Box>
    );
};

export default EducationSection;