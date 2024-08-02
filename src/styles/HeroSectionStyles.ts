import styled from 'styled-components';
import { motion } from 'framer-motion';

const responsiveStyles = `
  @media (max-width: 1200px) {
    font-size: 2.5rem;
    padding: 1.25rem;
  }
  @media (max-width: 992px) {
    font-size: 2.25rem;
    padding: 1.125rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 1rem;
  }
  @media (max-width: 576px) {
    font-size: 1.75rem;
    padding: 0.875rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 0.75rem;
  }
`;

export const HeroContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => theme.palette.background.default};
    //background-image: url(''); /* Add a subtle comic book pattern */
    background-size: cover;
`;

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
    ${responsiveStyles}
`;

export const Subtitle = styled(motion.h2)`
    font-family: 'Comic Neue', cursive;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.palette.text.primary};
    ${responsiveStyles}
`;

export const HeroImage = styled(motion.div)`
    margin-bottom: 1rem;
`;

export const SpeechBubble = styled(motion.div)`
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.palette.background.paper};
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 50%;
    padding: 1rem;
    font-family: 'Comic Sans MS', 'Comic Sans', cursive;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.palette.text.primary};
    text-align: center;
    box-shadow: 5px 5px 0 ${({ theme }) => theme.palette.secondary.main};
    &:before {
        content: '';
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        border-width: 20px;
        border-style: solid;
        border-color: ${({ theme }) => theme.palette.background.paper} transparent transparent transparent;
    }
`;

export const CTAButton = styled(motion.button)`
    background: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.text.primary};
    border: none;
    padding: 1rem 2rem;
    font-size: 1.25rem;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 1rem;
    &:hover {
        background: ${({ theme }) => theme.palette.primary.dark};
    }
`;

export const SummaryContainer = styled(motion.div)`
    margin-bottom: 1rem;
`;

export const SummaryText = styled(motion.p)`
    font-family: 'Comic Neue', cursive;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.palette.text.primary};
    ${responsiveStyles}
`;

export const AchievementsContainer = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
`;

export const AchievementItem = styled(motion.div)`
    background: ${({ theme }) => theme.palette.background.paper};
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 10px;
    padding: 1rem;
    width: 100%;
    max-width: 300px;
    text-align: center;
    box-shadow: 2px 2px 0 ${({ theme }) => theme.palette.secondary.main};
`;

export const AchievementTitle = styled.h3`
    font-family: 'Bangers', cursive;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.palette.primary.main};
    margin-bottom: 0.5rem;
`;

export const AchievementDescription = styled.p`
    font-family: 'Comic Neue', cursive;
    font-size: 1rem;
    color: ${({ theme }) => theme.palette.text.primary};
`;