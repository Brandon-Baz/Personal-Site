import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../../contexts/DataContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useHeroContent } from "../../hooks/useHeroContent";
import {
    MissionContainer,
    MissionTitle,
    MissionDescription,
    MissionContext,
    ProgressBar,
    ProgressFill,
    ProgressLabel
} from '../../styles/MissionPanelStyles';
import { heroTheme } from "../../styles/themes";

const MissionPanel: React.FC = () => {
    const { missions } = useData();
    const { theme, isProfessionalMode } = useTheme();
    const { summary } = useHeroContent();

    if (!missions || missions.length === 0) {
        return <div>No missions available</div>;
    }

    return (
        <MissionContainer>
            {/* <MissionContext>{summary.slice(50, 150)}...</MissionContext> */}
            {missions.map((mission, index) => (
                <div key={mission.name}>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: index * 0.1}}
                    >
                        <MissionTitle>
                            {mission.name}
                        </MissionTitle>
                        <MissionDescription>
                            {isProfessionalMode
                                ? mission.description
                                : (theme === heroTheme ? mission.description : mission.villainDescription)}
                        </MissionDescription>
                        <ProgressBar>
                            <ProgressFill
                                as={motion.div}
                                initial={{width: 0}}
                                animate={{width: `${mission.progress}%`}}
                                transition={{duration: 1, delay: 0.5}}
                            />
                            <ProgressLabel>{mission.progress}% Complete</ProgressLabel>
                        </ProgressBar>
                    </motion.div>
                </div>
            ))}
        </MissionContainer>
    );
};

export default MissionPanel;
