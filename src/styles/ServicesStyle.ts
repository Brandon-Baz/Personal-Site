import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${props => props.theme.palette.background.default};
`;

export const ServicesTitle = styled.h1`
  font-family: var(--font-heading);
  font-size: 3rem;
  color: ${props => props.theme.palette.primary.main};
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
  text-shadow: 3px 3px 0 $${({ theme }) => theme.palette.secondary.main};
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

export const ServicePanel = styled(motion.div)`
  background-color: ${({ theme }) => theme.palette.background.default};
  border: 3px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 5px 5px 0 ${({ theme }) => theme.palette.secondary.main};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 8px 8px 0 ${props => props.theme.palette.secondary.main};
  }
`;

export const ServiceIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.palette.primary.main};
  margin-bottom: 1rem;
  text-align: center;
`;

export const ServiceTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: 1.8rem;
  color: ${props => props.theme.palette.primary.main};
  margin-bottom: 1rem;
  text-align: center;
`;

export const ServiceDescription = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  color: ${props => props.theme.palette.text.primary};
  margin-bottom: 1rem;
  text-align: center;
`;

export const ServicePrice = styled.p`
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: ${props => props.theme.palette.secondary.main};
  text-align: center;
  font-weight: bold;
`;