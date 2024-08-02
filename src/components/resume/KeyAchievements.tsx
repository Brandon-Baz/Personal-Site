// src/components/resume/KeyAchievements.tsx
import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
// import { useTheme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';
import styled from 'styled-components';

const AchievementsContainer = styled(Box)`
  margin-bottom: 2rem;
`;

const AchievementsHeader = styled(Typography)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const AchievementsGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const AchievementCard = styled(motion.div)`
  background-color: ${props => props.theme.palette.background.paper};
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const KeyAchievements: React.FC = () => {
    const { achievements } = useData();

    return (
        <AchievementsContainer>
            <AchievementsHeader variant="h4">
                <FaTrophy style={{ marginRight: '0.5rem' }} /> Key Achievements
            </AchievementsHeader>
            <AchievementsGrid>
                {achievements.map((achievement, index) => (
                    <AchievementCard
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Box display="flex" alignItems="center" marginBottom="0.5rem">
                            {achievement.icon}
                            <Typography variant="h6" style={{ marginLeft: '0.5rem' }}>{achievement.title}</Typography>
                        </Box>
                        <Typography variant="body2">{achievement.description}</Typography>
                    </AchievementCard>
                ))}
            </AchievementsGrid>
        </AchievementsContainer>
    );
};
