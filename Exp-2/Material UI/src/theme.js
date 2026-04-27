import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: { main: "#1976d2" },
    secondary: { main: "#ff4081" },
    background: { default: mode === "light" ? "#f5f5f5" : "#121212" },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h2: { fontWeight: 800, letterSpacing: 1 },
    h6: { fontWeight: 600 },
    body1: { lineHeight: 1.6 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 600,
          padding: "8px 20px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 12px 20px rgba(0,0,0,0.2)",
          },
        },
      },
    },
  },
});
