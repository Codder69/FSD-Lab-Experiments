import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";

export default function LandingPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{
        textAlign: "center",
        py: 12,
        px: 2,
        background: "linear-gradient(135deg, #1976d2 0%, #ff4081 100%)",
        color: "white",
        borderRadius: 4,
        boxShadow: 3,
        mb: 5,
      }}>
        <Typography variant="h2" gutterBottom>
          Welcome to Stylish App
        </Typography>
        <Typography variant="h6" gutterBottom>
          Build responsive and attractive websites with React & Material UI
        </Typography>
        <Button variant="contained" sx={{ mt: 3, px: 4, py: 1 }}>
          Get Started
        </Button>
      </Box>

      {/* Features Section */}
      <Grid container spacing={3}>
        {[1,2,3,4].map((i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Card>
              <CardContent>
                <Typography variant="h6">Feature {i}</Typography>
                <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
