export const baseTheme = {
    typography: {
      fontFamily: "'Comic Neue', cursive",
      h1: {
        fontFamily: "'Bangers', cursive",
      },
      h2: {
        fontFamily: "'Bangers', cursive",
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
      },
    },
    shape: {
      borderRadius: 10,
    },
    spacing: (factor: number) => `${factor * 8}px`,
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