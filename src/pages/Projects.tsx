import React from 'react';
import { motion} from 'framer-motion';
import Section from '../ui/Section';
// import ProjectCard from '../components/ProjectCard';
// import RoguesGallery from '../components/RoguesGallery';

const Projects: React.FC = () => {
    // const { theme, content } = useTheme();
    // const isHero = theme === ThemeType.HERO;
    // const [selectedProject, setSelectedProject] = useState<string | null>(null);
    //
    // const containerVariants = {
    //     hidden: { opacity: 0 },
    //     visible: {
    //         opacity: 1,
    //         transition: { staggerChildren: 0.1 }
    //     }
    // };
    return (
        <motion.div
            className="projects-page"
            // variants={containerVariants}
            // initial="hidden"
            // animate="visible"
        >
            <Section title="Projects">
                <p>Coming Soon!</p>
            </Section>
        </motion.div>);
}

//     return (
//         <motion.div
//             className={`projects-page ${isHero ? 'hero-theme' : 'villain-theme'}`}
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//         >
//             <Section title={content.projects.title}>
//                 <p>{content.projects.description}</p>
//                 <div className="projects-grid">
//                     {content.projects.list.map((project) => (
//                         <ProjectCard
//                             key={project.id}
//                             {...project}
//                             onClick={() => setSelectedProject(project.id)}
//                         />
//                     ))}
//                 </div>
//             </Section>
//
//             <Section title={isHero ? "Heroic Challenges" : "Villainous Schemes"}>
//                 <RoguesGallery />
//             </Section>
//
//             <AnimatePresence>
//                 {selectedProject && (
//                     <motion.div
//                         className="project-modal"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                     >
//                         <motion.div
//                             className="modal-content comic-panel"
//                             initial={{ y: -50, opacity: 0 }}
//                             animate={{ y: 0, opacity: 1 }}
//                             exit={{ y: 50, opacity: 0 }}
//                         >
//                             <h2>{content.projects.list.find(p => p.id === selectedProject)?.title}</h2>
//                             <p>{content.projects.list.find(p => p.id === selectedProject)?.fullDescription}</p>
//                             <button onClick={() => setSelectedProject(null)}>Close</button>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </motion.div>
//     );
// };

export default Projects;