import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ErrorPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => props.theme.palette.background.default};
`;

export const ComicPanel = styled(motion.div)`
  background-color: ${props => props.theme.palette.background.paper};
  border: 5px solid ${props => props.theme.palette.primary.main};
  border-radius: 20px;
  padding: 2rem;
  max-width: 600px;
  text-align: center;
  box-shadow: 10px 10px 0 ${props => props.theme.palette.secondary.main};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    right: -15px;
    width: 30px;
    height: 30px;
    background-color: ${props => props.theme.palette.background.default};
    transform: rotate(45deg);
  }
`;

export const ErrorTitle = styled.h1`
  font-family: var(--font-heading);
  font-size: 4rem;
  color: ${props => props.theme.palette.primary.main};
  margin-bottom: 1rem;
  text-shadow: 3px 3px 0 ${props => props.theme.palette.secondary.main};
`;

export const ErrorMessage = styled.p`
  font-family: var(--font-body);
  font-size: 1.5rem;
  color: ${props => props.theme.palette.text.primary};
  margin-bottom: 2rem;
`;

export const SpeechBubble = styled.div`
  background-color: #fff;
  border: 3px solid ${props => props.theme.palette.primary.main};
  border-radius: 20px;
  padding: 1rem;
  position: relative;
  margin-bottom: 2rem;

  &::before {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 20px 20px 0;
    border-style: solid;
    border-color: ${props => props.theme.palette.primary.main} transparent;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 16px 16px 0;
    border-style: solid;
    border-color: #fff transparent;
  }
`;

export const SpeechContent = styled.p`
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: ${props => props.theme.palette.text.primary};
`;

export const HomeButton = styled(Link)`
  display: inline-block;
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: ${props => props.theme.palette.background.paper};
  background-color: ${props => props.theme.palette.primary.main};
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.palette.secondary.main};
    transform: translateY(-3px);
  }
`;