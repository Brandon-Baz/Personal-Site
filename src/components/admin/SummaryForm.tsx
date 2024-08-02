import React, { useState, useEffect } from 'react';
import { useData } from '../../contexts/DataContext';
import {
    FormContainer,
    FormTitle,
    FormTextArea,
    FormButton
} from '../../styles/AdminStyles';

const SummaryForm: React.FC = () => {
    const { summaries, updateSummaries } = useData();
    const [formData, setFormData] = useState(summaries);

    useEffect(() => {
        setFormData(summaries);
    }, [summaries]);

    const handleChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateSummaries(formData);
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormTitle>Update Summaries</FormTitle>
            <FormTextArea
                value={formData.professional}
                onChange={(e) => handleChange('professional', e.target.value)}
                placeholder="Professional Summary"
            />
            <FormTextArea
                value={formData.hero}
                onChange={(e) => handleChange('hero', e.target.value)}
                placeholder="Hero Summary"
            />
            <FormTextArea
                value={formData.villain}
                onChange={(e) => handleChange('villain', e.target.value)}
                placeholder="Villain Summary"
            />
            <FormButton type="submit">Update Summaries</FormButton>
        </FormContainer>
    );
};

export default SummaryForm;