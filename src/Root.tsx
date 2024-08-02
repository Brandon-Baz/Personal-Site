import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {ThemeProvider as MuiThemeProvider} from '@mui/material/styles';
import ThemeProvider, {useTheme} from './contexts/ThemeContext';
import App from './App';
import GlobalStyle from './styles/themes/GlobalStyle';
import DataProvider from "./contexts/DataContext";
import {UserPreferencesProvider} from './contexts/UserPreferencesContext';
import {heroTheme, professionalTheme, villainTheme} from "./styles/themes";

const ThemedApp = () => {
    const {themeMode, isProfessionalMode} = useTheme();
    const currentTheme = isProfessionalMode ? professionalTheme : (themeMode === 'hero' ? heroTheme : villainTheme);

    return (
            <MuiThemeProvider theme={currentTheme}>
        <StyledThemeProvider theme={currentTheme}>
                <GlobalStyle/>
                <UserPreferencesProvider>
                    <DataProvider>

                        <App/>
                    </DataProvider>
                </UserPreferencesProvider>
        </StyledThemeProvider>
            </MuiThemeProvider>
    );
};

const Root = () => (
    <ThemeProvider>
        <ThemedApp/>
    </ThemeProvider>
);

export default Root;