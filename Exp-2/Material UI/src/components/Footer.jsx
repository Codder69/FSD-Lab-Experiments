import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", py: 2, mt: 4, textAlign: "center" }}>
      <Typography variant="body2" color="text.secondary">
        © 2026 My App. All rights reserved.
      </Typography>
    </Box>
  );
}
