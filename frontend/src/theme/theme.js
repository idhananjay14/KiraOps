import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    background: {
      default: "#FAF9F6",
      paper: "#FFFFFF",
    },

    primary: {
      main: "#111111",
    },

    secondary: {
      main: "#8B7355",
    },

    text: {
      primary: "#111111",
      secondary: "#666666",
    },
  },

  typography: {
    fontFamily: '"Manrope", sans-serif',

    h1: {
      fontFamily: '"Bodoni Moda", serif',
      fontWeight: 500,
      fontSize: "4.8rem",
      lineHeight: 0.95,
      letterSpacing: "-0.03em",
    },

    h2: {
      fontFamily: '"Bodoni Moda", serif',
      fontWeight: 500,
      fontSize: "3.4rem",
      lineHeight: 1,
    },

    h3: {
      fontFamily: '"Bodoni Moda", serif',
      fontWeight: 500,
      fontSize: "2.5rem",
      lineHeight: 1.1,
    },

    h4: {
      fontFamily: '"Bodoni Moda", serif',
      fontWeight: 500,
      fontSize: "2rem",
    },

    h5: {
      fontFamily: '"Bodoni Moda", serif',
      fontWeight: 500,
      fontSize: "1.5rem",
    },

    h6: {
      fontFamily: '"Bodoni Modah", serif',
      fontWeight: 500,
      fontSize: "1.2rem",
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.8,
    },

    body2: {
      fontSize: "0.95rem",
      lineHeight: 1.7,
    },

    button: {
      fontSize: "0.9rem",
      fontWeight: 500,
      textTransform: "none",
      letterSpacing: "0.03em",
    },
  },

  shape: {
    borderRadius: 0,
  },

  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: "none",
          boxShadow: "none",
          padding: "12px 28px",
          fontWeight: 500,

          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#111111",
        },
      },
    },
  },
});

export default theme;