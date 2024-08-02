import React from 'react';
import {
    AnalyticsContainer,
    AnalyticsTitle,
    AnalyticsGrid,
    AnalyticsCard,
    AnalyticsValue,
    AnalyticsLabel
} from '../../styles/AdminStyles';

// In a real application, you'd fetch this data from an analytics service
const mockAnalyticsData = {
    pageViews: 1000,
    uniqueVisitors: 500,
    averageTimeOnSite: '2m 30s',
    bounceRate: '35%',
};

const AnalyticsDisplay: React.FC = () => {
    return (
        <AnalyticsContainer>
            <AnalyticsTitle>Website Analytics</AnalyticsTitle>
            <AnalyticsGrid>
                {Object.entries(mockAnalyticsData).map(([key, value]) => (
                    <AnalyticsCard key={key}>
                        <AnalyticsValue>{value}</AnalyticsValue>
                        <AnalyticsLabel>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</AnalyticsLabel>
                    </AnalyticsCard>
                ))}
            </AnalyticsGrid>
        </AnalyticsContainer>
    );
};

export default AnalyticsDisplay;