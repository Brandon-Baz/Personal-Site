import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Summary, Experiences, Education, Skills, Projects, JobMatcher } from '../components/resume';
import {
    ResumeContainer,
    TopBar,
    ActionButtons,
    Navigation,
    NavLink,
    ContentSection,
    ActionButton
} from "../styles/ResumeStyle"; 
import { AISidekick } from '../components/resume/AISidekick';
import { HERO_SIDEKICK_ID } from '../constants/AminoBotLinks';
import { BotContainer } from '../styles/AISidekickStyles';

const Resume: React.FC = () => {
    const { isProfessionalMode, toggleProfessionalMode } = useTheme();
    const [activeSection, setActiveSection] = useState('summary');

    const sections = [
        { id: 'summary', title: 'Summary', component: () => <Summary /> },
        { id: 'experiences', title: 'Experiences', component: () => <Experiences /> },
        { id: 'skills', title: 'Skills', component: () => <Skills /> },
        { id: 'projects', title: 'Projects', component: () => <Projects /> },
        { id: 'education', title: 'Education', component: () => <Education /> },
        { id: 'jobmatcher', title: 'Job Matcher', component: () => <JobMatcher /> }
    ];

    return (
        <ResumeContainer>
            <TopBar>
                <ActionButtons>
                    <ActionButton onClick={() => console.log('Download PDF')}>Download PDF</ActionButton>
                    <ActionButton onClick={() => console.log('Schedule Interview')}>Schedule Interview</ActionButton>
                </ActionButtons>
                <button onClick={toggleProfessionalMode}>
                    {isProfessionalMode ? 'Superhero Mode' : 'Professional Mode'}
                </button>
            </TopBar>

            <Navigation>
                {sections.map(section => (
                    <NavLink
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        active={activeSection === section.id}
                    >
                        {section.title}
                    </NavLink>
                ))}
            </Navigation>

            {sections.map(section => (
                <ContentSection
                    key={section.id}
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: activeSection === section.id ? 1 : 0, y: activeSection === section.id ? 0 : 20 }}
                    transition={{ duration: 0.5 }}
                    style={{ display: activeSection === section.id ? 'block' : 'none' }}
                >
                    {section.component()}
                </ContentSection>
            ))}
            <BotContainer id='chat_form'>
            <AISidekick 
                botId={HERO_SIDEKICK_ID}
            />
            </BotContainer>
            
        </ResumeContainer>
    );
};

export default Resume;