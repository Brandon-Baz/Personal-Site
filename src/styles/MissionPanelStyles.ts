import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MissionContainer = styled.div`
    background-color: ${({ theme }) => theme.palette.background.default};
    border: 3px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 5px 5px 0 ${({ theme }) => theme.palette.secondary.main};
`;

export const MissionTitle = styled.h3`
    font-family: 'Bangers', cursive;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.palette.primary.main};
    margin-bottom: 1rem;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 2px 2px 0 ${({ theme }) => theme.palette.secondary.main};
`;

export const MissionContext = styled.p`
    font-family: 'Comic Neue', cursive;
    font-size: 1rem;
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 1rem;
`;

export const MissionDescription = styled.p`
    font-family: 'Comic Neue', cursive;
    font-size: 1rem;
    color: ${props => props.theme.palette.text.primary};
    margin-bottom: 1rem;
`;

export const ProgressBar = styled.div`
    background-color: ${({ theme }) => theme.palette.background.default};
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 20px;
    height: 30px;
    position: relative;
    overflow: hidden;
`;

export const ProgressFill = styled(motion.div)`
    background-color: ${({ theme }) => theme.palette.secondary.main};
    height: 100%;
`;

export const ProgressLabel = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Bangers', cursive;
    font-size: 1rem;
    color: ${({ theme }) => theme.palette.primary.main};
    text-shadow: 1px 1px 0 ${({ theme }) => theme.palette.background.default};
`;