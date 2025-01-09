import React from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const MuiBreadcrumbs = () => {
  return (
    <Box sx={{ border: "1px solid", m: 3, p: 5 }}>
      <Breadcrumbs
        aria-label="Breadcrumbs"
        maxItems={2}
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Link href="#" underline="hover">
          Home
        </Link>
        <Link href="#" underline="hover">
          About
        </Link>
        <Link href="#" underline="hover">
          Contact
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrumbs;
