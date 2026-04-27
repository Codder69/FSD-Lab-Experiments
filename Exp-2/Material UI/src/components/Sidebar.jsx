import { Drawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";

const drawerWidth = 240;

export default function Sidebar({ open, onClose }) {
  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      sx={{ "& .MuiDrawer-paper": { width: drawerWidth } }}
    >
      <Toolbar />
      <List>
        <ListItem button>Landing</ListItem>
        <ListItem button>Dashboard</ListItem>
        <ListItem button>Admin Panel</ListItem>
      </List>
    </Drawer>
  );
}
