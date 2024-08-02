// src/pages/Portfolio.tsx
import {
    PortfolioContainer,
    PortfolioTitle,
    ProjectCard,
    ProjectDescription,
    ProjectGrid,
    ProjectImage,
    ProjectInfo,
    ProjectLink,
    ProjectTitle,
    TechStack,
    TechTag
} from "../styles/PortfolioStyle";
import {useData} from "../contexts/DataContext";




const Portfolio = () => {
    const projects = useData().projects;

    return (
        <PortfolioContainer>
            <PortfolioTitle>My Secret Projects</PortfolioTitle>
            <ProjectGrid>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <ProjectImage src={project.image} alt={project.title} />
                        <ProjectInfo>
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <ProjectDescription>{project.description}</ProjectDescription>
                            <TechStack>
                                {project.technologies.map((tech, i) => (
                                    <TechTag key={i}>{tech}</TechTag>
                                ))}
                            </TechStack>
                            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                                View Project
                            </ProjectLink>
                        </ProjectInfo>
                    </ProjectCard>
                ))}
            </ProjectGrid>
        </PortfolioContainer>
    );
};

export default Portfolio;