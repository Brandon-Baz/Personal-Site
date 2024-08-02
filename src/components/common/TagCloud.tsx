// src/components/TagCloud.tsx

import React from 'react';
import '../../styles/TagCloud.css';

interface Skill {
    name: string;
    level: number;
}

interface TagCloudProps {
    categorizedSkills: { [category: string]: Skill[] };
    theme: 'hero' | 'villain' | 'secret_identity';
}

const TagCloud: React.FC<TagCloudProps> = ({ categorizedSkills, theme }) => {
    return (
        <div className={`tag-cloud ${theme}`}>
            {Object.entries(categorizedSkills).map(([category, skills]) => (
                <div key={category} className="tag-category">
                    <h2>{category}</h2>
                    <div className="tags">
                        {skills.map((skill, index) => (
                            <span key={index} className="tag">
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TagCloud;
