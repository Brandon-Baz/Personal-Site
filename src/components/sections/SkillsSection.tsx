// src/components/sections/SkillsSection.tsx
import React from 'react';
import { Typography, Box } from '@mui/material';
import { FaTools } from 'react-icons/fa';
import SkillsGrid from '../skills/SkillMeter';
import SkillCard from '../skills/SkillCard';
import SkillsViewToggle from '../../utils/SkillsViewButton';
import { Skill } from '../../types/data';

interface SkillsSectionProps {
    skills: Skill[];
    skillView: 'bars' | 'cards';
    setSkillView: (view: 'bars' | 'cards') => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, skillView, setSkillView }) => {
    const categorizedSkills = skills.reduce((acc, skill) => {
        skill.tags.forEach(tag => {
            if (!acc[tag]) acc[tag] = [];
            acc[tag].push(skill);
        });
        return acc;
    }, {} as Record<string, Skill[]>);

    return (
        <>
            <Box display="flex" alignItems="center" mb={2}>
                <FaTools style={{ marginRight: '10px' }} />
                <Typography variant="h4">Skills</Typography>
            </Box>
            <SkillsViewToggle view={skillView} setView={setSkillView} />
            {skillView === 'bars' ? (
                <SkillsGrid categorizedSkills={categorizedSkills} />
            ) : (
                <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={2}>
                    {Object.entries(categorizedSkills).map(([category, categorySkills]) => (
                        <Box key={category}>
                            <Typography variant="h5" gutterBottom>{category}</Typography>
                            {categorySkills.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </Box>
                    ))}
                </Box>
            )}
        </>
    );
};

export default SkillsSection;