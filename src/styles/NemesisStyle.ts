
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GalleryContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.background.default};
  border: 3px solid ${({ theme }) => theme.palette.secondary.main};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 5px 5px 0 ${({ theme }) => theme.palette.primary.main};
`;

export const GalleryTitle = styled.h2`
  font-family: var(--font-heading);
  color: ${({ theme }) => theme.palette.secondary.main};
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 2px 2px 0 ${({ theme }) => theme.palette.primary.main};
`;

export const NemesisGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

export const NemesisCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.palette.background.default};
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const NemesisName = styled.h3`
    font-family: var(--font-heading);
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`;

export const NemesisDescription = styled.p`
    font-family: var(--font-body);
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1rem;
    margin-bottom: 0.5rem;
`;

export const WeaknessList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
`;

export const WeaknessItem = styled.li`
    font-family: var(--font-body);
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 0.9rem;
    margin-top: 0.25rem;
`;