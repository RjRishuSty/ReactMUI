import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia component='img' height='140' image="https://xpertlab.com/wp-content/uploads/2024/05/3-1.jpg" />
        <CardContent>
          <Typography component="div" variant="h5" gutterBottom>
            React
          </Typography>
          <Typography component="div" variant="body2">
            This covers everything about useState: its syntax, use cases,
            examples, rules, and advantages. Let me know if you need further
            details or examples!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="success" variant="outlined">
            Share
          </Button>
          <Button size="small" color="warning" variant="outlined">
            Learn more.
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
