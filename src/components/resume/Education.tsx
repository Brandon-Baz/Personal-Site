import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';
import SectionHeader from "../layout/SectionHeader";
import {useData} from "../../contexts/DataContext";


// interface EducationItem {
//     degree: string;
//     institution: string;
//     year: string;
//     honors: string[];
//     coursework: {
//         [category: string]: string[];
//     };
// }

// interface EducationProps {
//     education?: EducationItem[];
//     secretIdentityRevealed: boolean;
// }

export const Education: React.FC = () => {
    const { theme } = useTheme();
    const {education} = useData();
    const [expandedCourses, setExpandedCourses] = useState<string[]>([]);

    const toggleCourseExpansion = (category: string) => {
        setExpandedCourses(prev => 
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    return (
        <div className={`education-section ${theme}`}>
            <><SectionHeader
                title="Education"
                icon={<FaGraduationCap/>}/>
            </>
            {education.map((edu, index) => (
                <div key={index} className="education-item">
                    <h3>{edu.degree}</h3>
                    <h4>{edu.institution}</h4>
                    <p>{edu.year}</p>
                    <ul>
                        {edu.honors.map((honor, i) => (
                            <li key={i}>{honor}</li>
                        ))}
                    </ul>
                    <h4>Coursework</h4>
                    <div className="coursework-grid">
                        {Object.entries(edu.coursework).map(([category, courses]) => (
                            <div key={category} className="coursework-category">
                                <h5 
                                    onClick={() => toggleCourseExpansion(category)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {category} {expandedCourses.includes(category) ? <FaChevronUp /> : <FaChevronDown />}
                                </h5>
                                <AnimatePresence>
                                    {expandedCourses.includes(category) && (
                                        <motion.ul
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {courses.map((course, i) => (
                                                <motion.li 
                                                    key={i}
                                                    initial={{ x: -20, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: i * 0.05 }}
                                                >
                                                    {course}
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

