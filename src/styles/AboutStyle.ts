import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutContainer = styled.div`
  padding: 2rem;
  background-color: ${props => props.theme.palette.background.default};
`;

export const ComicPage = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background-color: ${props => props.theme.palette.background.paper};
  border: 3px solid ${props => props.theme.palette.primary.main};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 10px 10px 0 ${props => props.theme.palette.secondary.main};
`;

export const PageTitle = styled.h1`
  font-family: var(--font-heading);
  font-size: 3rem;
  color: ${props => props.theme.palette.primary.main};
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
  text-shadow: 3px 3px 0 ${props => props.theme.palette.secondary.main};
`;

export const ComicPanel = styled(motion.div)`
  background-color: #fff;
  border: 3px solid ${props => props.theme.palette.primary.main};
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    background-color: ${props => props.theme.palette.background.paper};
    transform: rotate(45deg);
  }
`;

export const PanelTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: 2rem;
  color: ${props => props.theme.palette.secondary.main};
  margin-bottom: 1rem;
`;

export const PanelContent = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  color: black;
  line-height: 1.6;
`;

export const SpeechBubble = styled.div`
  background-color: #fff;
  border: 2px solid ${props => props.theme.palette.primary.main};
  border-radius: 20px;
  padding: 1rem;
  position: relative;
  margin: 1rem 0;

  &::before {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 20px;
    border-width: 20px 20px 0;
    border-style: solid;
    border-color: ${props => props.theme.palette.primary.main} transparent;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -17px;
    left: 23px;
    border-width: 17px 17px 0;
    border-style: solid;
    border-color: #fff transparent;
  }
`;

export const SpeechContent = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  color: black;
  font-style: italic;
`;