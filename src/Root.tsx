import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {ThemeProvider as CustomThemeProvider, useTheme} from './contexts/ThemeContext';
import App from './App';
import GlobalStyle from './styles/themes/GlobalStyle';
import DataProvider from "./contexts/DataContext";
import {UserPreferencesProvider} from './contexts/UserPreferencesContext';
import {heroTheme, professionalTheme, villainTheme} from "./styles/themes";

const ThemedApp = () => {
    const {theme, isProfessionalMode} = useTheme();
    const currentTheme = isProfessionalMode ? professionalTheme : (theme === heroTheme ? heroTheme : villainTheme);

    return (
        <StyledThemeProvider theme={currentTheme}>
            <UserPreferencesProvider>
                <DataProvider>
                    <GlobalStyle/>
                    <App/>
                </DataProvider>
            </UserPreferencesProvider>
        </StyledThemeProvider>
    );
};

const Root = () => (
    <CustomThemeProvider>
        <ThemedApp/>
    </CustomThemeProvider>
);

export default Root;