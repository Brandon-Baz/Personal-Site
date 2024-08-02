import React, { useState, useEffect } from 'react';
import { useData } from '../../contexts/DataContext';
import {
    FormContainer,
    FormTitle,
    FormInput,
    FormTextArea,
    FormButton
} from '../../styles/AdminStyles';

const ServiceForm: React.FC = () => {
    const { services, updateServices } = useData();
    const [formData, setFormData] = useState(services);

    useEffect(() => {
        setFormData(services);
    }, [services]);

    const handleChange = (index: number, field: string, value: string) => {
        const newFormData = [...formData];
        newFormData[index] = { ...newFormData[index], [field]: value };
        setFormData(newFormData);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateServices(formData);
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormTitle>Update Services</FormTitle>
            {formData.map((service, index) => (
                <div key={index}>
                    <FormInput
                        type="text"
                        value={service.title}
                        onChange={(e) => handleChange(index, 'name', e.target.value)}
                        placeholder="Service Name"
                    />
                    <FormTextArea
                        value={service.description}
                        onChange={(e) => handleChange(index, 'description', e.target.value)}
                        placeholder="Description"
                    />
                </div>
            ))}
            <FormButton type="submit">Update Services</FormButton>
        </FormContainer>
    );
};

export default ServiceForm;