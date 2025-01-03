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
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";

const TwoJanuary = () => {
  const [visibility, SetVisibility] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.id]: e.target.value || "",
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationLoginData) {
      return "Login SUccessfully";
    }
  };
  const validationLoginData = (formData) => {
    if (formData.username === "") {
      console.log("isempty");
      return false;
    }
    if (formData.username.length < 6) {
      console.log("Min 7 digits of username");
      return false;
    }
    if (formData.password === "") {
      console.log("isEmpty");
      return false;
    }
    if (formData.password.length < 6) {
      console.log("Min 8 dights of password");
      return false;
    }
    return true;
  };

  const handleVisibility = (e) => {
    SetVisibility((prev) => !prev);
  };
  console.log(formData);
  return (
    <Stack
      sx={{
        width: "50%",
        bgcolor: "whitesmoke",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "50px 20px",
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
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="username"
            label="Username"
            color="success"
            size="medium"
            type="text"
            required
            value={formData.username}
            onChange={handleChange}
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
            id="password"
            label="Password"
            color="success"
            size="medium"
            required
            value={formData.password}
            onChange={handleChange}
            type={visibility ? "text" : "password"}
            sx={{ mb: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {visibility ? (
                    <VisibilityOffIcon
                      onClick={handleVisibility}
                      sx={{ cursor: "pointer" }}
                    />
                  ) : (
                    <VisibilityIcon
                      onClick={handleVisibility}
                      sx={{ cursor: "pointer" }}
                    />
                  )}
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
