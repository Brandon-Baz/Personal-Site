// src/components/home/DashboardLayout.tsx
import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import ActiveMissions from './ActiveMissions';
import NemesisGallery from './NemesisGallery';
import PowerLevels from './PowerLevels';
import Toolkit from './Toolkit';
import DailyLife from "./DailyLife";
import { useData } from '../../contexts/DataContext';
import styled from 'styled-components';

interface Props {
    children: React.ReactNode;
}

const DashboardContainer = styled(motion.div)`
    max-width: 1200px;
    margin: 0 auto;
`;

export const TopRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledPaper = styled(Paper)`
  padding: 1.5rem;
  height: 100%;
  background-color: ${props => props.theme.palette.background.paper};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DashboardLayout: React.FC<Props> = ({ children }) => {
    const { missions, nemeses, powers} = useData();

    return (
        <DashboardContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Box mb={4}>
                {children}
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <StyledPaper elevation={3}>
                        <ActiveMissions missions={missions} />
                    </StyledPaper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <StyledPaper elevation={3}>
                        <NemesisGallery nemeses={nemeses} />
                    </StyledPaper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <StyledPaper elevation={3}>
                        <PowerLevels powers={powers} />
                    </StyledPaper>
                </Grid>
                <Grid item xs={12}>
                    <StyledPaper elevation={3}>
                        <DailyLife />
                    </StyledPaper>
                </Grid>
                <Grid item xs={12}>
                    <StyledPaper elevation={3}>
                        <Toolkit  />
                    </StyledPaper>
                </Grid>
            </Grid>
        </DashboardContainer>
    );
};

export default DashboardLayout;