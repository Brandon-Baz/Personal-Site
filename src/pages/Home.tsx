import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import HeroSection from '../components/home/HeroSection';
import MissionPanel from '../components/home/MissionPanel';
import SkillsShowcase from '../components/home/SkillsShowcase';
import LatestProjects from '../components/home/LatestProjects';
import BlogPreview from '../components/home/BlogPreview';
import DailyLife from '../components/home/DailyLife';
import ImpactShowcase from '../components/home/ImpactShowcase';
import {
    PageContainer,
    ComicGrid,
    ComicPanel,
    PanelTitle
} from '../styles/ComicLayoutStyles';

const Home: React.FC = () => {
    const { themeMode, isProfessionalMode } = useTheme();

    return (
        <PageContainer>
            <ComicGrid>
                <ComicPanel as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <HeroSection />
                </ComicPanel>

                <ComicPanel>
                    <PanelTitle>
                        {isProfessionalMode
                            ? 'Key Impacts'
                            : themeMode === 'hero' ? 'Heroic Impact' : 'Villainous Influence'}
                    </PanelTitle>
                    <ImpactShowcase />
                </ComicPanel>

                <ComicPanel>
                    <PanelTitle>
                        {isProfessionalMode
                            ? 'Key Skills'
                            : themeMode === 'hero' ? 'Heroic Powers' : 'Villainous Powers'}
                    </PanelTitle>
                    <SkillsShowcase />
                </ComicPanel>

                {!isProfessionalMode && (
                    <ComicPanel>
                        <PanelTitle>{themeMode === 'hero' ? 'Current Mission' : 'Evil Scheme'}</PanelTitle>
                        <MissionPanel />
                    </ComicPanel>
                )}


                <ComicPanel>
                    <PanelTitle>
                        {isProfessionalMode
                            ? 'Recent Projects'
                            : themeMode === 'hero' ? 'Latest Heroic Feats' : 'Latest Villainous Actions'}
                    </PanelTitle>
                    <LatestProjects />
                </ComicPanel>

                <ComicPanel>
                    <PanelTitle>
                        {isProfessionalMode
                            ? 'Recent Posts'
                            : themeMode === 'hero' ? "Hero's Log" : "Villain's Log"}
                    </PanelTitle>
                    <BlogPreview />
                </ComicPanel>

                <ComicPanel className="full-width">
                    <PanelTitle>
                        {isProfessionalMode
                            ? 'A Day in the Life of Brandon'
                            : 'A Day in the Life'}
                    </PanelTitle>
                    <DailyLife />
                </ComicPanel>
            </ComicGrid>
        </PageContainer>
    );
};

export default Home;