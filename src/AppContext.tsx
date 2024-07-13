import React, { createContext, useState, useContext } from 'react';

  interface AppContextType {
    activePage: string;
    setActivePage: (page: string) => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
  }

  const AppContext = createContext<AppContextType | undefined>(undefined);

  export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activePage, setActivePage] = useState('home');
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    const toggleTheme = () => {
      setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
      <AppContext.Provider value={{ activePage, setActivePage, theme, toggleTheme }}>
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