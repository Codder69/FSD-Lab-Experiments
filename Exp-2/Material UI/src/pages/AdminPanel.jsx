import { Grid } from "@mui/material";
import CardItem from "../components/CardItem";

export default function AdminPanel() {
  const cards = [
    { title: "Manage Users", description: "Add / Edit / Delete users" },
    { title: "Analytics", description: "View detailed statistics" },
    { title: "Tasks", description: "Monitor task progress" },
    { title: "Settings", description: "Update application settings" },
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
