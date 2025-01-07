import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

const MuiNavbar = () => {
  return (
    <AppBar>
      <Toolbar position="static">
        <IconButton size="large" aria-label="logo" edge="start" color="inherit">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
          Pokemon App
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
