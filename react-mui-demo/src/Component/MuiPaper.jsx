import { Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const MuiPaper = () => {
  return (
    // TODO: paper props is (elevation={4}) means shadow effect controls

    <Paper sx={{ padding: "4rem" }} elevation={4}>
      <Stack spacing={2}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item md={6} sm={12} xs={12}>
            <Typography variant="h2" gutterBottom>
              About Us
            </Typography>
            <Typography variant="subtitile1">
              Hello Everyone, I am Rishu raj and i am from Bihar.Last Year I
              completed my BCA degree and have since focued on forented web
              developement.
            </Typography>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Typography variant="h2" gutterBottom>
              About Us
            </Typography>
            <Typography variant="subtitile1">
              Hello Everyone, I am Rishu raj and i am from Bihar.Last Year I
              completed my BCA degree and have since focued on forented web
              developement.
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
};

export default MuiPaper;
