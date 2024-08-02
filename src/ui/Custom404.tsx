import {
    ComicPanel,
    ErrorPageContainer,
    ErrorTitle, HomeButton,
    SpeechBubble,
    SpeechContent
} from "../styles/Custom404Style";
import {ErrorMessage} from "../styles/AdminStyles";
import {ThemeMode} from "../types/Theme";

const ErrorPage404 = ( {theme}: { theme: ThemeMode }) => {
    return (
        <ErrorPageContainer>
            <ComicPanel
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <ErrorTitle>404</ErrorTitle>
                <ErrorMessage>
                    {theme === 'hero'
                        ? "Oh no! The page you're looking for has been zapped into another dimension!"
                        : "Mwahaha! You've stumbled into my trap! This page doesn't exist!"}
                </ErrorMessage>
                <SpeechBubble>
                    <SpeechContent>
                        {theme === 'hero'
                            ? "Don't worry, citizen! I'll help you find your way back!"
                            : "Feeling lost? Good! But I'll let you escape... this time!"}
                    </SpeechContent>
                </SpeechBubble>
                <HomeButton to="/">
                    {theme === 'hero' ? 'Return to Safety' : 'Escape to Home Base'}
                </HomeButton>
            </ComicPanel>
        </ErrorPageContainer>
    );
};

export default ErrorPage404;