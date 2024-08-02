import React from 'react';
import { motion} from 'framer-motion';
import Section from '../ui/Section';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  repoUrl?: string;
}

// TODO: Replace these placeholders with actual projects I have worked on. Will build a list later.
const projects: Project[] = [
  {
    id: '1',
    title: 'Sentiment Analysis Tool',
    description: 'Led the development of a sentiment analysis tool for social media data, improving customer insight accuracy by 30%.',
    technologies: ['Python', 'Natural Language Processing', 'Machine Learning'],
    imageUrl: '/images/sentiment-analysis.jpg',
    projectUrl: 'https://example.com/sentiment-analysis',
    repoUrl: 'https://github.com/yourusername/sentiment-analysis'
  },
  {
    id: '2',
    title: 'Personal Portfolio Website',
    description: 'Designed and developed a responsive personal portfolio website using modern web technologies.',
    technologies: ['React', 'TypeScript', 'CSS3', 'Framer Motion'],
    imageUrl: '/images/portfolio-website.jpg',
    projectUrl: 'https://your-portfolio-url.com',
    repoUrl: 'https://github.com/yourusername/portfolio'
  },
  // Add more projects as needed
];

const ProjectCard: React.FC<Project> = ({ title, description, technologies, imageUrl, projectUrl, repoUrl }) => (
  <motion.div 
    className="project-card game-card"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <img src={imageUrl} alt={title} className="project-image" />
    <h3 className="project-title">{title}</h3>
    <p className="project-description">{description}</p>
    <div className="project-technologies">
      {technologies.map((tech, index) => (
        <span key={index} className="tech-badge game-badge">{tech}</span>
      ))}
    </div>
    <div className="project-links">
      {projectUrl && (
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="game-button">View Project</a>
      )}
      {repoUrl && (
        <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="game-button">View Code</a>
      )}
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  return (
    <div className="game-page projects-page">
      <Section title="My Projects">
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Projects;