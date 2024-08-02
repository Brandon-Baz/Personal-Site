
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MissionContainer = styled.div`
    background-color: ${props => props.theme.palette.background.default};
    border: 3px solid ${props => props.theme.palette.primary.main};
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 5px 5px 0 ${props => props.theme.palette.secondary.main};
`;

export const MissionTitle = styled.h2`
    font-family: var(--font-heading);
    color: ${props => props.theme.palette.primary.main};
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    text-transform: uppercase;
`;

export const MissionItem = styled(motion.div)`
    margin-bottom: 1.5rem;
`;

export const MissionName = styled.h3`
    font-family: var(--font-heading);
    color: ${props => props.theme.palette.text.primary};
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`;

export const ProgressBarContainer = styled.div`
    background-color: ${props => props.theme.palette.background.default};
    height: 20px;
    border-radius: 10px;
    overflow: hidden;
`;

interface ProgressBarProps {
    progress: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
    width: ${props => props.progress}%;
    height: 100%;
    background-color: ${props => props.theme.palette.primary.main};
    transition: width 0.5s ease-in-out;
`;

export const MissionDescription = styled.p`
  font-family: var(--font-body);
  color: ${props => props.theme.palette.text.primary};
  font-size: 1rem;
  margin-top: 0.5rem;
`;