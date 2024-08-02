// src/contexts/UserPreferencesContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserPreferences {
    weights: {
        skill: number;
        experience: number;
        project: number;
        cultural: number;
        softSkill: number;
    };
    threshold: number;
}

interface UserPreferencesContextType {
    preferences: UserPreferences;
    updatePreferences: (newPreferences: Partial<UserPreferences>) => void;
}

const defaultPreferences: UserPreferences = {
    weights: {
        skill: 0.3,
        experience: 0.25,
        project: 0.2,
        cultural: 0.15,
        softSkill: 0.1
    },
    threshold: 0.6
};

const UserPreferencesContext = createContext<UserPreferencesContextType | undefined>(undefined);

export const UserPreferencesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);

    const updatePreferences = (newPreferences: Partial<UserPreferences>) => {
        setPreferences(prev => ({ ...prev, ...newPreferences }));
    };

    return (
        <UserPreferencesContext.Provider value={{ preferences, updatePreferences }}>
            {children}
        </UserPreferencesContext.Provider>
    );
};

export const useUserPreferences = () => {
    const context = useContext(UserPreferencesContext);
    if (context === undefined) {
        throw new Error('useUserPreferences must be used within a UserPreferencesProvider');
    }
    return context;
};