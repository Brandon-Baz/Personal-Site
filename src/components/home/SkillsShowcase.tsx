import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../../contexts/DataContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useHeroContent } from "../../hooks/useHeroContent";
import {
    SkillsContainer,
    SkillsIntro,
    SkillItem,
    SkillIcon,
    SkillName,
    SkillBar,
    SkillLevel,
    SkillLabel
} from '../../styles/SkillsShowcaseStyles';

const SkillsShowcase: React.FC = () => {
    const { skills } = useData();
    const { isProfessionalMode } = useTheme();
    const { summary } = useHeroContent();

    return (
        <SkillsContainer>
            {/* <SkillsIntro>{summary.slice(150, 250)}...</SkillsIntro> */}
            {skills.slice().sort((a, b) => b.level - a.level).slice(0, 10).map((skill, index) => (
                <SkillItem key={skill.name}>
                    <SkillIcon>{skill.icon}</SkillIcon>
                    <SkillName>{skill.name}</SkillName>
                    <SkillBar>
                        <SkillLevel
                            as={motion.div}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                        <SkillLabel>{skill.level}/100</SkillLabel>
                    </SkillBar>
                    {isProfessionalMode && (
                        <p>{skill.experience} experience</p>
                    )}
                </SkillItem>
            ))}
        </SkillsContainer>
    );
};

export default SkillsShowcase;
