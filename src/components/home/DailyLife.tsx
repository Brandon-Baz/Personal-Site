import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';
import {
    ComicStripContainer,
    ComicStripTitle,
    ComicStrip,
    ComicPanel,
    ComicImage,
    ComicCaption,
    ComicDescription
} from "../../styles/DailyLife";
import { DailyLifeComic } from '../../types/data';
import LazyImage from '../common/LazyImage';
import ErrorBoundary from '../common/ErrorBoundary';

const DailyLife: React.FC = () => {
    const { themeMode, isProfessionalMode } = useTheme();
    const { dailyLifeComics, villainDailyLifeComics, professionalContent } = useData();

    const getComicContent = useMemo(() => {
        if (isProfessionalMode) {
            return professionalContent;
        } else if (themeMode === 'hero') {
            return dailyLifeComics;
        } else {
            return villainDailyLifeComics;
        }
    }, [isProfessionalMode, themeMode, dailyLifeComics, villainDailyLifeComics, professionalContent]);

    const titleText = useMemo(() => {
        if (isProfessionalMode) {
            return "A Day in the Life of Brandon Coburn";
        } else if (themeMode === 'hero') {
            return "A Day in the Life of Code Crusader";
        } else {
            return "24 Hours with Byte Buster";
        }
    }, [isProfessionalMode, themeMode]);

    return (
        <ErrorBoundary>
            <ComicStripContainer>
                <ComicStripTitle>{titleText}</ComicStripTitle>
                <ComicStrip>
                    {getComicContent.map((panel: DailyLifeComic, index: number) => (
                        <ComicPanel
                            key={`${themeMode}-${index}`}
                            as={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {!isProfessionalMode && (
                                <LazyImage
                                    src={panel.image}
                                    alt={panel.alt}
                                    Component={ComicImage}
                                />
                            )}
                            <ComicCaption>{panel.caption}</ComicCaption>
                            <ComicDescription>{panel.description}</ComicDescription>
                        </ComicPanel>
                    ))}
                </ComicStrip>
            </ComicStripContainer>
        </ErrorBoundary>
    );
};

export default DailyLife;
