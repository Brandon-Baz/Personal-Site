import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useData } from '../contexts/DataContext';
import {
    ServiceDescription,
    ServiceIcon,
    ServicePanel,
    ServicePrice,
    ServicesContainer,
    ServicesGrid,
    ServicesTitle,
    ServiceTitle
} from "../styles/ServicesStyle";
import {heroTheme} from "../styles/themes/heroTheme";

const Services: React.FC = () => {
    const { theme, isProfessionalMode } = useTheme();
    const { services } = useData();

    return (
        <ServicesContainer>
            <ServicesTitle>
                {isProfessionalMode
                    ? "Professional Services"
                    : theme === heroTheme
                        ? "Heroic Services"
                        : "Villainous Offerings"}
            </ServicesTitle>
            <ServicesGrid>
                {services.map((service, index) => (
                    <ServicePanel
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <ServiceIcon>{service.icon}</ServiceIcon>
                        <ServiceTitle>{service.title}</ServiceTitle>
                        <ServiceDescription>
                            {isProfessionalMode
                                ? service.description
                                : theme === heroTheme
                                    ? service.heroDescription
                                    : service.villainDescription}
                        </ServiceDescription>
                        <ServicePrice>{service.price}</ServicePrice>
                    </ServicePanel>
                ))}
            </ServicesGrid>
        </ServicesContainer>
    );
};

export default Services;