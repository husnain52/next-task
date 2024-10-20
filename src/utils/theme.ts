import { createTheme } from "@mui/material";
import "@fontsource/poppins"; // Import the font

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // Black as the primary color
    },
    secondary: {
      main: "#f50057", // A vibrant pink for secondary actions (feel free to customize)
    },
    background: {
      default: "#f5f5f5", // A light gray background for contrast
      paper: "#ffffff", // White for card and paper backgrounds
    },
    text: {
      primary: "#000000",
      secondary: "#4f4f4f", // A soft gray for secondary text
    },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif", // Use Poppins
    h1: {
      fontSize: "2.5rem",
      fontWeight: 900,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 900,
    },
    h3: {
      fontWeight: 900,
    },
    h4: {
      fontWeight: 900,
    },
    h5: {
      fontWeight: 900,
      margin: "10px 0px"
    },
    body1: {
      fontSize: "1rem",
    },
    button: {
      textTransform: "none", // Disable uppercase transformation on buttons for a modern look
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8, // Rounded corners for a more refined look
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
        contained: {
          backgroundColor: "#000000",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#333333",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)", // More shadow for card elevation
          borderRadius: "16px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 1px 0px rgba(0,0,0,0.75)", // Subtle shadow for a slight border effect
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 1px 0px rgba(0,0,0,0.75)", // Even lighter shadow for minor elements like cards
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          "&.MuiContainer-maxWidthMd": {
            maxWidth: "1300px",
          },
        },
      },
    },
  },
});

export { theme };
