import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeroContainer,
  SummaryContainer,
  SummaryText,
  AnimatedCTAButton,
  AnimatedHeroImage,
} from "../../styles/HeroSectionStyles";
import ImageWithFallback from "../common/ImageWithFallback";
import { useHeroContent } from "../../hooks/useHeroContent";
import getAnimations from "../../utils/GetAnimations";

const HeroSection: React.FC = () => {
  const { ctaText, imageSrc, imageAlt, summary, themeMode, isProfessionalMode } = useHeroContent();

  const navigate = useNavigate();
  const animations = getAnimations(isProfessionalMode, themeMode);

  const handleCTAClick = useCallback(() => {
    navigate("/resume");
  }, [navigate]);

  return (
    <AnimatePresence mode="wait">
      <HeroContainer
                as={motion.div}
                variants={animations.container}
                initial="initial"
                animate="animate"
                exit="exit"
                key={`${themeMode}-${isProfessionalMode}`}
            >
        <AnimatedHeroImage variants={animations.image}>
          <ImageWithFallback
            src={imageSrc}
            alt={imageAlt}
            fallbackSrc="/images/fallback-hero.jpg"
            srcSet={`${imageSrc}-small.jpg 300w, ${imageSrc}-medium.jpg 600w, ${imageSrc}-large.jpg 1200w`}
            sizes="(max-width: 300px) 100vw, (max-width: 600px) 50vw, 33vw"
          />
        </AnimatedHeroImage>
        <AnimatedCTAButton
          variants={animations.button}
          onClick={handleCTAClick}
          aria-label={ctaText}
        >
          {ctaText}
        </AnimatedCTAButton>
        <SummaryContainer variants={animations.element}>
          <SummaryText variants={animations.text}>{summary}</SummaryText>
        </SummaryContainer>
      </HeroContainer>
    </AnimatePresence>
  );
};

export default HeroSection;
