import styled from 'styled-components';
import { motion } from 'framer-motion';


export const HomeContainer = styled.div`
    min-height: 100vh;
    padding: 2rem;
    transition: background-color 0.5s ease, color 0.5s ease;
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
`;

export const DashboardLayout = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const HeroSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    position: relative;
`;

export const HeroContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroImage = styled.div`
    max-width: 300px;
    margin-bottom: 1rem;

    img {
        width: 100%;
        height: auto;
        border: 5px solid ${({ theme }) => theme.palette.primary.main};
        border-radius: 50%;
    }
`;

export const SpeechBubble = styled(motion.div)`
    position: absolute;
    top: -30px;
    right: -100px;
    background-color: white;
    border: 3px solid ${({ theme }) => theme.palette.background.default};
    border-radius: 50%;
    padding: 1rem;
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

    h2 {
        margin: 0;
        font-size: 1.2rem;
        text-align: center;
    }
`;

export const CTAButtons = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
`;

export const CTAButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
`;

export const DashboardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TopRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ThemeToggles = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
`;

export const ThemeToggle = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
`;