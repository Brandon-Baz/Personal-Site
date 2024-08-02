import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import {heroTheme} from "../styles/themes/heroTheme";

const ContactForm: React.FC = () => {
    const { theme } = useTheme();
    const isHero = theme === heroTheme;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Form submitted');
        setSubmitted(true);
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <motion.form
            className={`contact-form comic-panel ${isHero ? 'hero-form' : 'villain-form'}`}
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="form-group">
                <label htmlFor="name">{isHero ? "Civilian Name" : "Alias"}</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">{isHero ? "Communication Frequency" : "Secure Channel"}</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">{isHero ? "Mission Details" : "Evil Plan"}</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
            </div>
            <motion.button
                type="submit"
                className="submit-button btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {isHero ? "Dispatch Message" : "Transmit Intel"}
            </motion.button>
            {submitted && (
                <motion.p
                    className="success-message"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {isHero ? "Message received, hero! We'll be in touch soon." : "Intel received, villain. Expect dark tidings shortly."}
                </motion.p>
            )}
        </motion.form>
    );
};

export default ContactForm;