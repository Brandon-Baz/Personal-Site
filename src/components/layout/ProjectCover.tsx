import React from 'react';
import { motion } from 'framer-motion';
import { Theme } from '../../constants';

interface ProjectCoverProps {
    project: {
        title: string;
        description: string;
    };
    theme: Theme;
}

const ProjectCover: React.FC<ProjectCoverProps> = ({ project, theme }) => {
    return (
        <motion.div
            className={`project-cover ${theme}`}
            whileHover={{ scale: 1.05 }}
        >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </motion.div>
    );
};

export default ProjectCover;