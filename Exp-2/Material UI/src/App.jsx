import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

import { getTheme } from "./theme";

// Pages
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";

export default function App() {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          {/* Top Navbar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 3,
              py: 1,
              boxShadow: 3,
              bgcolor: "background.paper",
              position: "sticky",
              top: 0,
              zIndex: 1000,
            }}
          >
            <h2 style={{ margin: 0 }}>My Stylish App</h2>
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === "light" ? <Brightness4 /> : <Brightness7 />}
            </IconButton>
          </Box>

          {/* Page Content */}
          <Box sx={{ flex: 1, p: 3 }}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<AdminPanel />} />
            </Routes>
          </Box>

          {/* Footer */}
          <Box
            sx={{
              textAlign: "center",
              py: 2,
              mt: "auto",
              bgcolor: "primary.main",
              color: "primary.contrastText",
              boxShadow: 3,
            }}
          >
            © 2026 Stylish App. All rights reserved.
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}
