import React, { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import {
    HeroContainer,
    TitleContainer,
    Title,
    Subtitle,
    CTAButton,
    SummaryText,
    SummaryContainer,
    HeroImage,
} from '../../styles/HeroSectionStyles';
import ImageWithFallback from '../common/ImageWithFallback';
import { heroAnimations, villainAnimations, professionalAnimations } from '../../styles/theme/animation';
import { useHeroContent } from "../../hooks/useHeroContent";

const getAnimations = (themeMode: string) => {
    switch (themeMode) {
        case 'hero':
            return heroAnimations;
        case 'villain':
            return villainAnimations;
        default:
            return professionalAnimations;
    }
};

const HeroSection: React.FC = () => {
    const {
        name,
        subtitle,
        ctaText,
        summary,
        imageSrc,
        imageAlt,
        themeMode,
    } = useHeroContent();

    const navigate = useNavigate();
    const animations = getAnimations(themeMode);

    const handleCTAClick = useCallback(() => {
        navigate("/resume");
    }, [navigate]);

    return (
        <AnimatePresence mode="wait">
            <HeroContainer
                as={motion.div}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={animations.container}
                key={themeMode}
            >
                <TitleContainer variants={animations.title}>
                    <Title variants={animations.text}>{name}</Title>
                    <Subtitle variants={animations.text}>{subtitle}</Subtitle>
                </TitleContainer>
                <HeroImage variants={animations.image}>
                    <ImageWithFallback
                        src={imageSrc}
                        alt={imageAlt}
                        fallbackSrc="/images/fallback-hero.jpg"
                        srcSet={`${imageSrc}-small.jpg 300w, ${imageSrc}-medium.jpg 600w, ${imageSrc}-large.jpg 1200w`}
                        sizes="(max-width: 300px) 100vw, (max-width: 600px) 50vw, 33vw"
                    />
                </HeroImage>
                <CTAButton variants={animations.button} onClick={handleCTAClick} aria-label={ctaText}>
                    {ctaText}
                </CTAButton>
                <SummaryContainer variants={animations.summary}>
                    <SummaryText variants={animations.text}>{summary}</SummaryText>
                </SummaryContainer>
            </HeroContainer>
        </AnimatePresence>
    );
};

export default HeroSection;
