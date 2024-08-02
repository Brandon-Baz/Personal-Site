// src/components/resume/Experience.tsx
import { FaBriefcase } from 'react-icons/fa';
import { useData } from '../../contexts/DataContext';
import {List, ListItem, SectionContainer, SectionContent, SectionTitle} from "../../styles/ResumeSectionStyle";
import {ItemSubtitle, ItemTitle} from "../../styles/ResumeStyle";

export const Experiences = () => {
    const { experiences } = useData();
    return (
        <SectionContainer>
            <SectionTitle><FaBriefcase /> Experiences</SectionTitle>
            <SectionContent>
                <List>
                    {experiences.map((exp, index) => (
                        <ListItem key={index}>
                            <ItemTitle>{exp.position} at {exp.company}</ItemTitle>
                            <ItemSubtitle>{exp.duration}</ItemSubtitle>
                            <ul>
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </ListItem>
                    ))}
                </List>
            </SectionContent>
        </SectionContainer>
    );
};
