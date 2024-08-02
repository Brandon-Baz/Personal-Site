import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import {useTheme} from "../../contexts/ThemeContext";


interface Skill {
    name: string;
    level: number;
}

interface SkillMeterProps {
    skill: Skill;
}

const SkillMeter: React.FC<SkillMeterProps> = ({ skill }) => {
    const [ref, isVisible] = useScrollAnimation();
    const { theme } = useTheme();


    return (
        <motion.div
            ref={typeof ref === 'boolean' ? undefined : ref}
            className={`skill-card ${theme} ${isVisible ? 'visible' : ''}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
            transition={{ duration: 0.5 }}
        >
            <h3>{skill.name}</h3>
            <div className="skill-meter-container">
                <motion.div
                    className="skill-meter"
                    initial={{ width: 0 }}
                    animate={{ width: isVisible ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
            </div>
            <span className="skill-level">{skill.level}/100</span>
        </motion.div>
    );
};

interface SkillsGridProps {
    categorizedSkills: { [category: string]: Skill[] };
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ categorizedSkills }) => {

    return (
        <div className="skills-grid">
            {Object.entries(categorizedSkills).map(([category, skills]) => (
                <div key={category} className="skill-category">
                    <h2>{category}</h2>
                    <div className="skills-list">
                        {skills.map((skill, index) => (
                            <SkillMeter key={index} skill={skill} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillsGrid;
