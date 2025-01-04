import { Box, Grid, Stack } from "@mui/material";
import React from "react";

const MuiGrid = () => {
  return (
    <Stack spacing={3} sx={{ border: "2px solid" }} p={4}>
      <Grid container rowSpacing={2} columnSpacing={1}>
        <Grid item md={3} sm={6} xs={12}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default MuiGrid;
