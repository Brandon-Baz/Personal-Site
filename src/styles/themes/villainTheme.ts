import { createTheme } from '@mui/material/styles';
import { baseTheme } from './baseTheme';

export const villainTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#8B008B',
        dark: '#4B004B',
    },
    secondary: {
      main: '#00CED1',
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
        },
      },
    },
  },
});