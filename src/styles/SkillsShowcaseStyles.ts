import styled from 'styled-components';
import {motion} from 'framer-motion';

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const SkillItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const SkillIcon = styled.div`
    font-size: 2rem;
    color: ${({theme}) => theme.palette.primary.main};
`;

export const SkillName = styled.span`
    font-family: 'Bangers', cursive;
    font-size: 1.2rem;
    color: ${({theme}) => theme.palette.text.primary};
    width: 100px;
`;

export const SkillBar = styled.div`
    flex-grow: 1;
    height: 20px;
    background-color: ${({theme}) => theme.palette.background.default};
    border: 2px solid ${({theme}) => theme.palette.primary.main};
    border-radius: 10px;
    position: relative;
    overflow: hidden;
`;

export const SkillLevel = styled(motion.div)`
    background-color: ${({theme}) => theme.palette.secondary.main};
    height: 100%;
`;

export const SkillLabel = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Bangers', cursive;
    font-size: 1rem;
    color: ${({theme}) => theme.palette.primary.main};
    text-shadow: 1px 1px 0 ${({theme}) => theme.palette.background.default};
`;