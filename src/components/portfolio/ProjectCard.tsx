import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import '../../styles/ProjectCard.css';

interface Project {
    image: string;
    title: string;
    heroDescription: string;
    villainDescription: string;
    technologies: string[];
    liveLink?: string;
    githubLink?: string;
}

interface ProjectCardProps {
    project: Project;
    theme: 'hero' | 'villain'; // Assuming these are the two possible themes
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, theme }) => {
    return (
        <motion.div
            className={`project-card ${theme}`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
                <h3>{project.title}</h3>
                <p>{theme === 'hero' ? project.heroDescription : project.villainDescription}</p>
                <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                    ))}
                </div>
                <div className="project-links">
                    {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt /> Live Demo
                        </a>
                    )}
                    {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <FaGithub /> View Code
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;