import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { useData } from '../../contexts/DataContext';
import {
    ImpactContainer,
    ImpactItem,
    ImpactIcon,
    ImpactTitle,
    ImpactDescription,
    ImpactMetricStyle
} from '../../styles/ImpactShowcaseStyle';
import { ImpactMetric } from '../../types/data';
import {heroTheme} from "../../styles/themes/heroTheme";

const ImpactShowcase: React.FC = () => {
    const {theme, isProfessionalMode} = useTheme();
    const {impactMetrics} = useData();

    const getDescription = (impact: ImpactMetric) => {
        if (isProfessionalMode) return impact.description;
        return theme === heroTheme ? impact.heroDescription : impact.villainDescription;
    };

    return (
        <ImpactContainer>
            {impactMetrics.slice(0, 3).map((impact, index) => (
                <ImpactItem
                    key={impact.title}
                    as={motion.div}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <ImpactIcon>{impact.icon}</ImpactIcon>
                    <div>
                        <ImpactTitle>{impact.title}</ImpactTitle>
                        <ImpactDescription>{getDescription(impact)}</ImpactDescription>
                        <ImpactMetricStyle>{impact.metric}</ImpactMetricStyle>
                    </div>
                </ImpactItem>
            ))}
        </ImpactContainer>
    );
};

export default ImpactShowcase;