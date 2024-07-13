import React from 'react';
import Section from '../ui/Section';
import ContactForm from '../ui/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="game-page">
      <Section title="Contact Me">
        <p>Feel free to reach out for collaborations or opportunities:</p>
        <ContactForm />
      </Section>
    </div>
  );
};

export default Contact;
