import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useData } from '../contexts/DataContext';
import {
    AboutContainer,
    ComicPage,
    ComicPanel,
    PageTitle,
    PanelTitle,
    PanelContent,
    SpeechBubble,
    SpeechContent
} from "../styles/AboutStyle";
import {heroTheme} from "../styles/themes/heroTheme";

const About: React.FC = () => {
    const { theme, isProfessionalMode } = useTheme();
    const { content } = useData();

    return (
        <AboutContainer>
            <ComicPage>
                <PageTitle>
                    {isProfessionalMode
                        ? "Brandon Coburn's Journey"
                        : theme === heroTheme
                            ? 'Origin Story'
                            : 'Villainous Beginnings'}
                </PageTitle>

                <ComicPanel
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <PanelTitle>The Early Days</PanelTitle>
                    <PanelContent>{content.earlyDays}</PanelContent>
                </ComicPanel>

                <SpeechBubble>
                    <SpeechContent>{content.quote1}</SpeechContent>
                </SpeechBubble>

                <ComicPanel
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <PanelTitle>The Transformation</PanelTitle>
                    <PanelContent>{content.transformation}</PanelContent>
                </ComicPanel>

                <ComicPanel
                    as={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <PanelTitle>Present Day</PanelTitle>
                    <PanelContent>{content.presentDay}</PanelContent>
                </ComicPanel>

                <SpeechBubble>
                    <SpeechContent>{content.quote2}</SpeechContent>
                </SpeechBubble>
            </ComicPage>
        </AboutContainer>
    );
};

export default About;