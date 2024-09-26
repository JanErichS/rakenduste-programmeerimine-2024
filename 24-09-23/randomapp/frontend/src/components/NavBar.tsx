import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} /* Positions the navbar buttons to the right */>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My React Website :)
          </Typography>

          <Button color="inherit">
            <NavLink
              to="/cats"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "inherit",
              })}>
              Cats
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink
              to="/todo"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: "inherit",
              })}>
              TODOS
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
