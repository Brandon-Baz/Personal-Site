import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PortfolioContainer = styled.div`
  padding: 2rem;
  background-color: ${props => props.theme.palette.background.default};
`;

export const PortfolioTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: 3rem;
  color: ${props => props.theme.palette.primary.main};
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
  text-shadow: 3px 3px 0 ${props => props.theme.palette.secondary.main};
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const ProjectCard = styled(motion.div)`
  background-color: ${props => props.theme.palette.background.paper};
  border: 3px solid ${props => props.theme.palette.primary.main};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 5px 5px 0 ${props => props.theme.palette.secondary.main};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 8px 8px 0 ${props => props.theme.palette.secondary.main};
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 3px solid ${props => props.theme.palette.primary.main};
`;

export const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

export const ProjectTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.8rem;
  color: ${props => props.theme.palette.primary.main};
  margin-bottom: 0.5rem;
`;

export const ProjectDescription = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  color: ${props => props.theme.palette.text.primary};
  margin-bottom: 1rem;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const TechTag = styled.span`
  background-color: ${props => props.theme.palette.secondary.main};
  color: ${props => props.theme.palette.background.paper};
  font-family: var(--font-body);
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 15px;
`;

export const ProjectLink = styled.a`
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 1rem;
  color: ${props => props.theme.palette.background.paper};
  background-color: ${props => props.theme.palette.primary.main};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.palette.secondary.main};
    transform: translateY(-2px);
  }
`;