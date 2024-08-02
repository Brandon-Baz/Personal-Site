import React, { useState, useEffect } from 'react';
import { useData } from '../../contexts/DataContext';
import {
    FormContainer,
    FormTitle,
    FormInput,
    FormButton
} from '../../styles/AdminStyles';

const SkillForm: React.FC = () => {
    const { skill, updateSkill } = useData();
    const [formData, setFormData] = useState(skill);

    useEffect(() => {
        setFormData(skill);
    }, [skill]);

    const handleChange = (category: string, index: number, field: string, value: string | number) => {
        const newFormData = { ...formData };
        newFormData[category][index] = { ...newFormData[category][index], [field]: value };
        setFormData(newFormData);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateSkill(formData);
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormTitle>Update Skills</FormTitle>
            {Object.entries(formData).map(([category, categorySkills]) => (
                <div key={category}>
                    <h3>{category}</h3>
                    {categorySkills.map((skill, index) => (
                        <div key={index}>
                            <FormInput
                                type="text"
                                value={skill.name}
                                onChange={(e) => handleChange(category, index, 'name', e.target.value)}
                                placeholder="Skill Name"
                            />
                            <FormInput
                                type="number"
                                value={skill.level}
                                onChange={(e) => handleChange(category, index, 'level', parseInt(e.target.value))}
                                placeholder="Skill Level"
                            />
                            <FormInput
                                type="text"
                                value={skill.experience}
                                onChange={(e) => handleChange(category, index, 'experience', e.target.value)}
                                placeholder="Experience"
                            />
                        </div>
                    ))}
                </div>
            ))}
            <FormButton type="submit">Update Skills</FormButton>
        </FormContainer>
    );
};

export default SkillForm;