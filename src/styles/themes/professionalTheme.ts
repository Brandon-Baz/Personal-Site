import { createTheme } from '@mui/material/styles';

export const professionalTheme = createTheme({
  palette: {
    primary: {
      main: '#0077B5',
        dark: '#003E6B',
    },
    secondary: {
      main: '#00A0DC',
        dark: '#004B80',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F3F6F8'
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
