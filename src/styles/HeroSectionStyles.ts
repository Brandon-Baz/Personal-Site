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
    margin-bottom: 1.5rem;
`;

// TODO: This may be removed, but I may end up moving it somewhere else instead of deleting.
export const SpeechBubble = styled(motion.div)`
    position: absolute;
    top: 22%; /* Adjust this value to position the bubble vertically */
    left: 42%;
    transform: translateX(-50%);
    width: 186px; /* Adjust the width as needed */
    height: 167px; /* Adjust the height as needed */
    background: url('/images/ChatBubble.png') no-repeat center center;
    background-size: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
    padding-bottom: 2.75rem;
    font-family: 'Comic Sans MS', 'Comic Sans', cursive;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.palette.text.primary};
    z-index: 10; /* Ensure it appears above the hero image */

    @media (max-width: 1200px) {
        top: 16%;
    }

    @media (max-width: 992px) {
        top: 14%;
    }

    @media (max-width: 768px) {
        top: 14%;
    }

    @media (max-width: 576px) {
        top: 14%;
    }

    @media (max-width: 480px) {
        top: 13%;
    }
`;

export const CTAButton = styled(motion.button)`
  background: ${({ theme }) => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`};
  color: ${({ theme }) => theme.palette.background.paper};
  font-family: 'Bangers', cursive;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 12px 24px;
  border: 3px solid ${({ theme }) => theme.palette.text.primary};
  border-radius: 8px;
  box-shadow: 6px 6px 0px ${({ theme }) => theme.palette.text.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: ${({ theme }) => theme.palette.secondary.main};
    transition: all 0.3s ease-in-out;
    z-index: -1;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.text.primary};
    transform: translate(3px, 3px);
    box-shadow: 3px 3px 0px ${({ theme }) => theme.palette.text.primary};
  }

  &:hover:before {
    width: 100%;
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