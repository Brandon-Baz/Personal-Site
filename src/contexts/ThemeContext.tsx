// src/contexts/ThemeContext.tsx
import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { heroTheme, villainTheme, professionalTheme } from '../styles/theme/theme';
import { Theme } from '@mui/material/styles';

export type ThemeMode = 'hero' | 'villain' | 'professional';

interface ThemeContextType {
    themeMode: ThemeMode;
    toggleTheme: () => void;
    theme: Theme;
    isProfessionalMode: boolean;
    toggleProfessionalMode: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [themeMode, setThemeMode] = useState<ThemeMode>('hero');
    const [isProfessionalMode, setIsProfessionalMode] = useState(false);

    const toggleTheme = useCallback(() => {
        setThemeMode((prevMode) => (prevMode === 'hero' ? 'villain' : 'hero'));
    }, []);

    const toggleProfessionalMode = useCallback(() => {
        setIsProfessionalMode((prevMode) => !prevMode);
    }, []);

    const theme = isProfessionalMode
        ? professionalTheme
        : themeMode === 'hero'
            ? heroTheme
            : villainTheme;

    const contextValue = {
        themeMode,
        toggleTheme,
        theme,
        isProfessionalMode,
        toggleProfessionalMode,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            <MuiThemeProvider theme={theme}>
                <StyledComponentsThemeProvider theme={theme}>
                    {children}
                </StyledComponentsThemeProvider>
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export default ThemeProvider;