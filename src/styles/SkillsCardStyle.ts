import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.palette.background.default};
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 3px 3px 0 ${({ theme }) => theme.palette.secondary.main};
`;

export const CardTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom: 0.5rem;
`;

export const CardContent = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: 5px;
  overflow: hidden;
  margin-top: 0.5rem;
`;

interface SkillProgressProps {
    level: number
}

export const Progress = styled.div<SkillProgressProps>`
  width: ${props => props.level}%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;