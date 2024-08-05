import { createTheme } from '@mui/material/styles';
import { baseTheme } from './baseTheme';

export const villainTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#6a0dad',
        dark: '#4B004B',
    },
    secondary: {
      main: '#00ced1',
        dark: '#008080',
    },
    background: {
      default: '#1C1C1C',
      paper: '#2C2C2C',
    },
    text: {
      primary: '#E0E0E0',
      secondary: '#00CED1',
    },
    error: {
      main: '#ff0000',
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: '#8B008B',
          textShadow: '2px 2px #00CED1',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #8B008B 30%, #00CED1 90%)',
          border: 0,
          color: 'white',
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(0, 206, 209, .3)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 5px 7px 2px rgba(0, 206, 209, .5)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '15px',
          boxShadow: '0 8px 16px 0 rgba(0,0,0,0.3)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 20px 0 rgba(0,0,0,0.4)',
          },
        },
      },
    },
  },
});
