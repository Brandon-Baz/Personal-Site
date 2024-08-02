import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';
import {heroTheme} from "../styles/theme/theme";

const NeetocalContainer = styled.div`
    width: 100%;
    height: 600px;
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 10px;
    overflow: hidden;
`;

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: var(--font-body);
  font-size: 1.2rem;
  color: ${({ theme }) => theme.palette.text.primary};
`;

interface NeetocalSchedulerProps {
    calendarId: string;
}

const NeetocalScheduler: React.FC<NeetocalSchedulerProps> = ({ calendarId }) => {
    const { theme, isProfessionalMode } = useTheme();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.neetocal.com/widget/neetocal.js';
        script.async = true;
        script.onload = () => setIsLoading(false);
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const getThemeMessage = () => {
        if (isProfessionalMode) return "Schedule a meeting with Brandon Coburn";
        return theme === heroTheme ? "Book a session with the Code Crusader" : "Schedule a sinister meeting with Byte Buster";
    };

    return (
        <NeetocalContainer>
            {isLoading ? (
                <LoadingMessage>{getThemeMessage()}</LoadingMessage>
            ) : (
                <div
                    className="neetocal-embed"
                    data-id={calendarId}
                    data-theme={theme === heroTheme ? 'light' : 'dark'}
                    data-lang="en"
                ></div>
            )}
        </NeetocalContainer>
    );
};

export default NeetocalScheduler;