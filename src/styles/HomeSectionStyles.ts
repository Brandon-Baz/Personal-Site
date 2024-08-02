import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TitleContainer = styled(motion.div)`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Title = styled(motion.h1)`
  font-family: 'Bangers', cursive;
  font-size: 3rem;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 0 ${({ theme }) => theme.palette.secondary.main};
`;

export const Subtitle = styled(motion.h2)`
  font-family: 'Comic Neue', sans-serif;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: bold;
`;

export const HeroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    position: relative;
    overflow: hidden;
`;

export const HeroImage = styled(motion.img)`
    width: 300px;
    height: auto;
    border: 5px solid ${({ theme }) => theme.palette.secondary.main};;
    border-radius: 50%;
    box-shadow: 0 0 0 5px ${({ theme }) => theme.palette.primary.main};,
                0 0 0 10px ${({ theme }) => theme.palette.secondary.main};;
`;

export const SpeechBubble = styled(motion.div)`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: ${({ theme }) => theme.palette.background.default};;
    color: ${({ theme }) => theme.palette.primary.main};;
    padding: 1rem;
    border-radius: 50% 50% 50% 0;
    font-family: 'Bangers', cursive;
    font-size: 2rem;
    transform: rotate(15deg);
    box-shadow: 5px 5px 0 ${({ theme }) => theme.palette.secondary.main};;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -20px;
        width: 0;
        height: 0;
        border-left: 20px solid ${({ theme }) => theme.palette.background.default};;
        border-right: 20px solid transparent;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
    }
`;

export const CTAButton = styled(motion.button)`
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: ${({ theme }) => theme.palette.secondary.main};;
    color: ${({ theme }) => theme.palette.background.default};;
    border: none;
    padding: 1rem 2rem;
    font-family: 'Bangers', cursive;
    font-size: 1.5rem;
    cursor: pointer;
    transform: rotate(-5deg);
    box-shadow: 5px 5px 0 ${({ theme }) => theme.palette.primary.main};;
    transition: all 0.3s ease;

    &:hover {
        transform: rotate(-5deg) scale(1.05);
    }
`;