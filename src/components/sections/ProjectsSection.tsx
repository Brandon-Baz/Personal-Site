// src/components/sections/ProjectsSection.tsx
import React from 'react';
import { Typography, Box, Card, CardContent, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '../../types/data';

interface ProjectsSectionProps {
    projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
    return (
        <Box>
            <Box display="flex" alignItems="center" mb={2}>
                <FaCode style={{ marginRight: '10px' }} />
                <Typography variant="h4">Projects</Typography>
            </Box>
            {projects.map((project, index) => (
                <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <Card variant="outlined" sx={{ mb: 2 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {project.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                {project.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                size="small"
                                startIcon={<FaExternalLinkAlt />}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </Button>
                        </CardActions>
                    </Card>
                </motion.div>
            ))}
        </Box>
    );
};

export default ProjectsSection;