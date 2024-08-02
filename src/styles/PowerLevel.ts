import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PowerContainer = styled.div`
    background-color: ${({ theme }) => theme.palette.background.default};
    border: 3px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 5px 5px 0 ${props => props.theme.palette.secondary.main};
`;

export const PowerTitle = styled.h2`
    font-family: var(--font-heading);
    font-size: 2rem;
    color: ${({ theme }) => theme.palette.primary.main};
    text-align: center;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    text-shadow: 2px 2px 0 ${({ theme }) => theme.palette.secondary.main};
`;

export const PowerItem = styled.div`
    margin-bottom: 1.5rem;
`;

export const PowerName = styled.h3`
    font-family: var(--font-heading);
    font-size: 1.2rem;
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: 0.5rem;
`;

export const PowerBarContainer = styled.div`
    background-color: ${({ theme }) => theme.palette.background.default};
    height: 30px;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
`;

export const PowerBar = styled(motion.div)`
  height: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 15px;
`;

export const PowerLevel = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-family: var(--font-heading);
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.text.primary};
  text-shadow: 1px 1px 0 ${({ theme }) => theme.palette.secondary.main};
`;