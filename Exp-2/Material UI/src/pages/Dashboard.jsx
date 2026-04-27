import { Grid } from "@mui/material";
import CardItem from "../components/CardItem";

export default function Dashboard() {
  const cards = [
    { title: "Users", description: "Manage users easily" },
    { title: "Analytics", description: "View charts and data" },
    { title: "Tasks", description: "Track your tasks" },
    { title: "Settings", description: "Configure the app" },
  ];

  return (
    <Grid container spacing={3}>
      {cards.map((c, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <CardItem title={c.title} description={c.description} />
        </Grid>
      ))}
    </Grid>
  );
}
