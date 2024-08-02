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
import {heroTheme} from "../../styles/themes";

const DailyLife = () => {
    const { theme, isProfessionalMode } = useTheme();
    const { dailyLifeComics, villainDailyLifeComics } = useData();

    const getProfessionalContent = () => [
        { caption: "9:00 AM - Start the day", description: "Begin with team standup and prioritize tasks", alt: "Team standup",
            image:""},
        { caption: "11:00 AM - Coding session", description: "Focus on implementing new features and solving complex problems",
            alt: "Coding session", image: ""},
        { caption: "2:00 PM - Code review", description: "Collaborate with team members to ensure code quality",
            alt: "Code review", image: ""},
        { caption: "4:00 PM - Continuous learning", description: "Dedicate time to learning new technologies and best practices",
            alt: "Continuous learning", image: ""},
    ];

    const getComicContent = () => {
        if (isProfessionalMode) {
            return getProfessionalContent();
        } else if (theme === heroTheme) {
            return dailyLifeComics;
        } else {
            return villainDailyLifeComics;
        }
    };

    const comicContent = getComicContent();

    return (
        <ComicStripContainer>
            <ComicStripTitle>
                {isProfessionalMode
                    ? "A Day in the Life of Brandon Coburn"
                    : theme === heroTheme
                        ? "A Day in the Life of Code Crusader"
                        : "24 Hours with Byte Buster"}
            </ComicStripTitle>
            <ComicStrip>
                {comicContent.map((panel, index) => (
                    <ComicPanel
                        key={index}
                        as={motion.div}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {!isProfessionalMode && <ComicImage src={panel.image} alt={panel.alt} />}
                        <ComicCaption>{panel.caption}</ComicCaption>
                        <ComicDescription>{panel.description}</ComicDescription>
                    </ComicPanel>
                ))}
            </ComicStrip>
        </ComicStripContainer>
    );
};

export default DailyLife;