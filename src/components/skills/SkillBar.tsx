// src/components/SkillBar.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface SkillBarProps {
    skill: {
        name: string;
        level: number;
    };
    theme: 'hero' | 'villain' | 'secret_identity';
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, theme }) => {
    const starTotal = 5;
    const starPercentage = (skill.level / 100) * starTotal;
    const starRating = Math.round(starPercentage * 2) / 2;

    return (
        <div className={`skill-bars ${theme}`}>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-level-container">
                <motion.div
                    className="skill-level"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                />
                <div className="skill-stars">
                    {[...Array(5)].map((_, index) => {
                        const number = index + 0.5;
                        return (
                            <span key={index}>
                                {starRating >= index + 1 ? (
                                    <FaStar className="star" />
                                ) : starRating >= number ? (
                                    <FaStarHalfAlt className="star" />
                                ) : (
                                    <FaRegStar className="star" />
                                )}
                            </span>
                        );
                    })}
                </div>
                <span className="skill-percentage">{skill.level}%</span>
            </div>
        </div>
    );
};

export default SkillBar;