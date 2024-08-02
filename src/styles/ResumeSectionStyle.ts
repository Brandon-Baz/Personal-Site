import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionContainer = styled(motion.div)`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 2rem;
  color: ${props => props.theme.palette.primary.main};
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const SectionContent = styled.div`
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: 1rem;
  color: ${props => props.theme.palette.text.primary};
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 1rem;
`;