// src/components/Projects.tsx
import {FaCode} from 'react-icons/fa';
import {useData} from "../../contexts/DataContext";
import {List, ListItem, SectionContainer, SectionContent, SectionTitle} from "../../styles/ResumeSectionStyle";
import {ItemTitle} from "../../styles/ResumeStyle";

export const Projects = () => {
    const { projects } = useData();
    return (
        <SectionContainer>
            <SectionTitle><FaCode /> Projects</SectionTitle>
            <SectionContent>
                <List>
                    {projects.map((project, index) => (
                        <ListItem key={index}>
                            <ItemTitle>{project.title}</ItemTitle>
                            <p>{project.description}</p>
                        </ListItem>
                    ))}
                </List>
            </SectionContent>
        </SectionContainer>
    );
};
