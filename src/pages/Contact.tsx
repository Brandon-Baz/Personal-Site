import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {
    FormContainer,
    FormGroup,
    FormTitle,
    Input,
    Label,
    StyledForm,
    SubmitButton,
    TextArea,
    ThankYouMessage
} from "../styles/ContactStyle";
import {heroTheme} from "../styles/themes/heroTheme";

const Contact: React.FC = () => {
    const { theme, isProfessionalMode } = useTheme();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
    };

    return (
        <FormContainer>
            <FormTitle>
                {isProfessionalMode
                    ? "Contact Brandon"
                    : theme === heroTheme
                        ? 'Contact the Crusader'
                        : 'Summon the Byte Buster'}
            </FormTitle>
            <AnimatePresence>
                {!isSubmitted ? (
                    <StyledForm onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="message">Message</Label>
                            <TextArea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <SubmitButton
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isProfessionalMode
                                ? 'Send Message'
                                : theme === heroTheme
                                    ? 'Send Signal'
                                    : 'Transmit Intel'}
                        </SubmitButton>
                    </StyledForm>
                ) : (
                    <ThankYouMessage
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        {isProfessionalMode
                            ? 'Thank you for your message. I will get back to you soon.'
                            : theme === heroTheme ? 'Message received, hero! We\'ll be in touch soon.'
                            : 'Intel received, villain. Expect dark tidings shortly.'}
                    </ThankYouMessage>
                )}
            </AnimatePresence>
        </FormContainer>
    );
};

export default Contact;