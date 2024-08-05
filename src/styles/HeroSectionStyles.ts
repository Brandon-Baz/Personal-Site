import styled from "styled-components";
import { motion } from "framer-motion";
import { heroPulseAnimation, heroSwooshAnimation } from "../animations/heroAnimations";
import { villainDistortAnimation, villainShadowAnimation } from "../animations/villainAnimations";

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
  padding: ${({ theme }) => theme.spacing(4)};
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.palette.background.default};
`;

export const TitleContainer = styled(motion.div)`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  text-shadow: 2px 2px 0 ${({ theme }) => theme.palette.secondary.main};
  ${responsiveStyles}
`;

export const Subtitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  color: ${({ theme }) => theme.palette.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  ${responsiveStyles}
`;

export const HeroImage = styled(motion.div)`
  margin-bottom: 1.5rem;
`;

export const AnimatedHeroImage = styled(motion.div)`
  ${({ theme }) => theme.themeMode === 'hero' && heroSwooshAnimation}
  ${({ theme }) => theme.themeMode === 'villain' && villainShadowAnimation}
`;

// TODO: This may be removed, but I may end up moving it somewhere else instead of deleting.


export const CTAButton = styled(motion.button)`
  background: ${({ theme }) =>
    `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`};
  color: ${({ theme }) => theme.palette.background.paper};
  font-family: "Bangers", cursive;
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
    content: "";
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

export const AnimatedCTAButton = styled(motion.button)`
  ${({ theme }) => theme.themeMode === 'hero' && heroPulseAnimation}
  ${({ theme }) => theme.themeMode === 'villain' && villainDistortAnimation}
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
  background: ${({ theme }) => theme.palette.background.paper};
  border: 3px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(3)};
  box-shadow: 3px 3px 0px ${({ theme }) => theme.palette.secondary.main};
  position: relative;
  overflow: hidden;
  max-width: 95%;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/halftone-texture.png');
    opacity: 0.1;
    z-index: 0;
  }
`;

export const SummaryText = styled(motion.p)`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  color: ${({ theme }) => theme.palette.text.primary};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  position: relative;
  z-index: 1;
  ${responsiveStyles}
`;
