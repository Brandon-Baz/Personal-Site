import React, { useCallback } from 'react';
import {useNavigate} from "react-router-dom";
import { motion, AnimationProps, AnimatePresence } from 'framer-motion';
import {
    HeroContainer,
    TitleContainer,
    Title,
    Subtitle,
    SpeechBubble,
    CTAButton,
    SummaryText,
    SummaryContainer,
    HeroImage,
} from '../../styles/HeroSectionStyles';
import ImageWithFallback from '../common/ImageWithFallback';
import { heroAnimations, villainAnimations, professionalAnimations } from '../../styles/theme/animation';
import { useHeroContent } from "../../hooks/useHeroContent";
import {useTheme} from "../../contexts/ThemeContext";


const HeroSection: React.FC = () => {
    const {
        name,
        subtitle,
        ctaText,
        summary,
        imageSrc,
        imageAlt,
        actionWord,
        isProfessionalMode,
    } = useHeroContent();

    const navigate = useNavigate();
    const {themeMode} = useTheme();
    const animations = themeMode === 'hero' ? heroAnimations :
        themeMode === 'villain' ? villainAnimations :
            professionalAnimations;
    const handleCTAClick = useCallback(() => {
        navigate("/resume");
    },[navigate]);

    return (
        <AnimatePresence mode="wait">
            <HeroContainer
                as={motion.div}
                initial={animations.container.initial as AnimationProps['initial']}
                animate={animations.container.animate as AnimationProps['animate']}
                exit={animations.container.exit as AnimationProps['exit']}
            >
                <TitleContainer {...animations.title}>
                    <Title {...animations.text}>{name}</Title>
                    <Subtitle {...animations.text}>{subtitle}</Subtitle>
                </TitleContainer>
                <HeroImage {...animations.image}>
                    <ImageWithFallback
                        src={imageSrc}
                        alt={imageAlt}
                        fallbackSrc="/images/fallback-hero.jpg"
                        srcSet={`${imageSrc}-small.jpg 300w, ${imageSrc}-medium.jpg 600w, ${imageSrc}-large.jpg 1200w`}
                        sizes="(max-width: 300px) 100vw, (max-width: 600px) 50vw, 33vw"
                    />
                    {!isProfessionalMode && actionWord && (
                        <SpeechBubble
                            {...('speechBubble' in animations ? animations.speechBubble : {})}
                            role="text"
                            aria-label={`Action word: ${actionWord}`}
                        >
                            {actionWord}
                        </SpeechBubble>
                    )}
                </HeroImage>
                <CTAButton {...animations.button} onClick={handleCTAClick} aria-label={ctaText}>
                    {ctaText}
                </CTAButton>
                <SummaryContainer {...animations.summary}>
                    <SummaryText {...animations.text}>{summary}</SummaryText>
                </SummaryContainer>
            </HeroContainer>
        </AnimatePresence>
    );
};

export default HeroSection;