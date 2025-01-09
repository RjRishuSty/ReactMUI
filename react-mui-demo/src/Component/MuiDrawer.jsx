import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        size="large"
        color=" inherit"
        edge="start"
      >
        <MenuIcon />
      </IconButton>
      {/*  Drawer is default is hidden if you want to show then play with state */}
      <Drawer
        sx={{ border: "2px solid", m: 3, p: 3 }}
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box role="presentation" sx={{ p: 2 }} width="250px" textAlign="center">
          <Typography variant="h6" component="div">
            Side Panle
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
