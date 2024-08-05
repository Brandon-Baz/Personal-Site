import { createTheme } from '@mui/material/styles';
import {baseTheme} from "./baseTheme";

export const heroTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: '#ff0000',
      dark: '#b30000',
    },
    secondary: {
      main: '#FFD700',
        dark: '#b38800',
    },
    background: {
      default: '#f0e68c',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666'
    },
    error: {
      main: '#ff0000',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: 48,
          padding: '0 30px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 5px 7px 2px rgba(255, 105, 135, .5)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '15px',
          boxShadow: '0 8px 16px 0 rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 20px 0 rgba(0,0,0,0.15)',
          },
        },
      },
    },
  },
});
