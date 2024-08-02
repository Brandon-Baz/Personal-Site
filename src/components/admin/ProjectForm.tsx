import React, { useState, useEffect } from 'react';
import { useData } from '../../contexts/DataContext';
import {
    FormContainer,
    FormTitle,
    FormInput,
    FormTextArea,
    FormButton
} from '../../styles/AdminStyles';

const ProjectForm: React.FC = () => {
    const { projects, updateProjects } = useData();
    const [formData, setFormData] = useState(projects);

    useEffect(() => {
        setFormData(projects);
    }, [projects]);

    const handleChange = (index: number, field: string, value: string) => {
        const newFormData = [...formData];
        newFormData[index] = { ...newFormData[index], [field]: value };
        setFormData(newFormData);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateProjects(formData);
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormTitle>Update Projects</FormTitle>
            {formData.map((project, index) => (
                <div key={index}>
                    <FormInput
                        type="text"
                        value={project.title}
                        onChange={(e) => handleChange(index, 'name', e.target.value)}
                        placeholder="Project Name"
                    />
                    <FormTextArea
                        value={project.description}
                        onChange={(e) => handleChange(index, 'description', e.target.value)}
                        placeholder="Description"
                    />
                </div>
            ))}
            <FormButton type="submit">Update Projects</FormButton>
        </FormContainer>
    );
};

export default ProjectForm;