// src/components/resume/Skills.tsx
import { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import { SkillsGrid } from '../skills/SkillsGrid';
import {SkillsCard} from '../skills/SkillCard';
import {SectionContainer, SectionTitle, ViewToggle} from "../../styles/SkillsStyle";
import {FaCogs} from "react-icons/fa";
import SkillsFilter from "../../utils/SkillFilter";

export const Skills = () => {
    const { skills } = useData();
    const [filter, setFilter] = useState('');
    const [view, setView] = useState('grid');

    const filteredSkills = skills.filter(skill =>
        skill.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <SectionContainer>
            <SectionTitle><FaCogs /> Skills</SectionTitle>
            <ViewToggle onClick={() => setView(view === 'grid' ? 'list' : 'grid')}>
                Switch to {view === 'grid' ? 'List' : 'Grid'} View
            </ViewToggle>
            <SkillsFilter onFilterChange={setFilter} />
            {view === 'grid' ? (
                <SkillsGrid skills={filteredSkills} />
            ) : (
                filteredSkills.map((skill, index) => (
                    <SkillsCard key={index} skill={skill} />
                ))
            )}
        </SectionContainer>
    );
};
