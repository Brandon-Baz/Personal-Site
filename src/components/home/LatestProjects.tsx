import { motion } from "framer-motion";
import { useData } from "../../contexts/DataContext";
import { useTheme } from "../../contexts/ThemeContext";
import {
  ProjectsContainer,
  ProjectCard,
  ProjectTitle,
  ProjectDescription,
  ProjectLink,
} from "../../styles/LatestProjectsStyles";

const LatestProjects = () => {
  const { projects } = useData();
  const { themeMode, isProfessionalMode } = useTheme();

  return (
    <ProjectsContainer>
      {projects.slice(0, 3).map((project, index) => (
        <ProjectCard
          key={project.id}
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>
            {isProfessionalMode
              ? project.description
              : themeMode === "hero"
              ? project.description
              : project.villainDescription}
          </ProjectDescription>
          <ProjectLink href={project.link}>
            {isProfessionalMode
              ? "View Project"
              : themeMode === "hero"
              ? "View Heroic Feat"
              : "View Evil Scheme"}
          </ProjectLink>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default LatestProjects;
