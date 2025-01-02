import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiSelectTextField = () => {
  const [country, setCountry] = useState("");
  const [multiData, setMultiData] = useState([]);
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };
  const handleMultiDataChange = (event) => {
    const value = event.target.value;

    setMultiData(typeof value === "string" ? value.split(",") : value);
  };
  console.log("COUN", country);
  console.log("Mul", multiData);
  return (
    <Box width="100%">
      <TextField
        label="Select Country"
        select
        fullWidth
        value={country}
        onChange={handleCountryChange}

        sx={{mb:5}}
      >
        <MenuItem value="India">India</MenuItem>
        <MenuItem value="Usa">USA</MenuItem>
        <MenuItem value="Austraia">Austraia</MenuItem>
      </TextField>

      {/* TODO: Select Mulit Opations in select textField */}
      <TextField
        label="Select Multiple options"
        select
        fullWidth
        value={multiData}
        onChange={handleMultiDataChange}
        SelectProps={{
          multiple: true,
        }}
        sx={{mb:5}}
      >
        <MenuItem value="One">One</MenuItem>
        <MenuItem value="Two">Two</MenuItem>
        <MenuItem value="Three">Three</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelectTextField;
