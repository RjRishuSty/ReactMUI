import { Box, Divider, Stack } from "@mui/material";
import React from "react";

const MuiLayoutStack = () => {
  return (
    <Stack sx={{ border: "2px solid" }} direction='row' spacing={3} divider={<Divider orientation="vertical" flexItem/>}>
      <Box
        sx={{
          backgroundColor: "error.main",
          padding: "16px",
          color: "white",
          width: "50%",
          height: "auto",
          textAlign: "center",
          fontSize: "2rem",
          "&:hover": {
            backgroundColor: "error.light",
          },
        }}
      >
        Box1
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          padding: "16px",
          color: "white",
          width: "50%",
          height: "auto",
          textAlign: "center",
          fontSize: "2rem",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Box2
      </Box>
    </Stack>
  );
};

export default MuiLayoutStack;
