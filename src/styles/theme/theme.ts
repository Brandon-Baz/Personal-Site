import { createTheme } from '@mui/material/styles';


const baseTheme = {
    typography: {
        fontFamily: "'Comic Neue', cursive",
        h1: {
            fontFamily: "'Bangers', cursive",
        },
        h2: {
            fontFamily: "'Bangers', cursive",
        },
    },
    shape: {
        borderRadius: 10,
    },
    transitions: {
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195,
        },
        easing: {
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
    },
    animations: {
        heroEntrance: {
            keyframes: `
        @keyframes heroEntrance {
          0% { transform: translateY(-50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `,
            animation: 'heroEntrance 0.5s ease-out',
        },
        villainEntrance: {
            keyframes: `
        @keyframes villainEntrance {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `,
            animation: 'villainEntrance 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        },
    },
};

export const heroTheme = createTheme({
    ...baseTheme,
    palette: {
        mode: 'light',
        primary: {
            main: '#ff0000',
        },
        secondary: {
            main: '#FFD700',
        },
        background: {
            default: '#f0e68c',
            paper: '#ffffff',
        },
        text: {
            primary: '#333333',
            secondary: '#ffffff'
        },
        error: {
            main: '#ff0000',
        }
    },
});

export const villainTheme = createTheme({
    ...baseTheme,
    palette: {
        mode: 'dark',
        primary: {
            main: '#8B008B',
        },
        secondary: {
            main: '#00CED1',
        },
        background: {
            default: '#1C1C1C',
            paper: '#2C2C2C',
        },
        text: {
            primary: '#E0E0E0',
            secondary: '#00CED1', // Changed to gray for better readability
        },
        error: {
            main: '#ff0000',
        }
    },
});

export const professionalTheme = createTheme({
    palette: {
        primary: {
            main: '#0077B5', // LinkedIn blue
        },
        secondary: {
            main: '#00A0DC', // Lighter blue
        },
        background: {
            default: '#FFFFFF',
            paper: '#F3F6F8',
        },
        text: {
            primary: '#283E4A',
            secondary: '#F3F6F8',
        },
        error: {
            main: '#ff0000',
        }
    },
    typography: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 600,
        },
        body1: {
            fontSize: '1rem',
        },
    },
    shape: {
        borderRadius: 4,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
    },
});