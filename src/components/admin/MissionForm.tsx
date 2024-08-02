import React, { useState, useEffect } from 'react';
import { useData } from '../../contexts/DataContext';
import {
    FormContainer,
    FormTitle,
    FormInput,
    FormTextArea,
    FormButton
} from '../../styles/AdminStyles';

const MissionForm: React.FC = () => {
    const { missions, updateMissions } = useData();
    const [formData, setFormData] = useState(missions);

    useEffect(() => {
        setFormData(missions);
    }, [missions]);

    const handleChange = (index: number, field: string, value: string) => {
        const newFormData = [...formData];
        newFormData[index] = { ...newFormData[index], [field]: value };
        setFormData(newFormData);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateMissions(formData);
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormTitle>Update Missions</FormTitle>
            {formData.map((mission, index) => (
                <div key={index}>
                    <FormInput
                        type="text"
                        value={mission.name}
                        onChange={(e) => handleChange(index, 'name', e.target.value)}
                        placeholder="Mission Name"
                    />
                    <FormInput
                        type="number"
                        value={mission.progress}
                        onChange={(e) => handleChange(index, 'progress', e.target.value)}
                        placeholder="Progress"
                    />
                    <FormTextArea
                        value={mission.description}
                        onChange={(e) => handleChange(index, 'description', e.target.value)}
                        placeholder="Description"
                    />
                </div>
            ))}
            <FormButton type="submit">Update Missions</FormButton>
        </FormContainer>
    );
};

export default MissionForm;