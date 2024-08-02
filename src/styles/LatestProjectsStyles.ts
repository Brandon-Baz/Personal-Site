import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
`;

export const ProjectCard = styled(motion.div)`
    background-color: ${({ theme }) => theme.palette.background.default};
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 3px 3px 0 ${({ theme }) => theme.palette.secondary.main};
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 5px 5px 0 ${({ theme }) => theme.palette.secondary.main};
    }
`;

export const ProjectTitle = styled.h4`
    font-family: 'Bangers', cursive;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.palette.primary.main};
    margin-bottom: 0.5rem;
`;

export const ProjectDescription = styled.p`
    font-family: 'Comic Neue', cursive;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.palette.text.primary};
`;

export const ProjectLink = styled.a`
    font-family: 'Bangers', cursive;
    font-size: 1rem;
    color: ${({ theme }) => theme.palette.secondary.main};
    background-color: ${({theme}) => theme.palette.primary.main};
    border: 2px solid ${({ theme }) => theme.palette.secondary.main};
    border-radius: 10px;
    padding: 0.1rem 0.5rem;
    text-decoration: none;
    display: inline-block;
    margin-top: 0.5rem;

    &:hover {
        text-decoration: underline;
    }
`;