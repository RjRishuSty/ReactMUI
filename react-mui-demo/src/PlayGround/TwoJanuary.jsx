import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React from "react";

const TwoJanuary = () => {
  return (
    <Stack
      width="100%"
      height="80vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        sx={{
          width: "50%",
          padding: "50px 20px",
          boxShadow: "0px 0px 5px black",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          textAlign="center"
          fontWeight="800"
          variant="h3"
          gutterBottom
        >
          Login Page
        </Typography>
        <Typography
          component="p"
          variant="subtitle2"
          gutterBottom
          sx={{ width: "70%", mb: 2 }}
          textAlign="center"
        >
          This updated code ensures both single and multiple selection fields
          work correctly and aligns with Material-UI's functionality.
        </Typography>
        <form>
          <TextField
            fullWidth
            label="Username"
            color="success"
            size="medium"
            type="text"
            required
            sx={{ mb: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            label="Password"
            color="success"
            size="medium"
            required
            type="password"
            sx={{ mb: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="success"
            size="large"
            sx={{ display: "flex", margin: "auto" }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Stack>
  );
};

export default TwoJanuary;
