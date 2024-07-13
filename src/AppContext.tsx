import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  theme: 'superhero' | 'villain';
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'superhero' | 'villain'>('superhero');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'superhero' ? 'villain' : 'superhero'));
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
