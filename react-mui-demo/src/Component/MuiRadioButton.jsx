import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

export const MuiRadioButton = () => {
  const [data, setData] = useState("");
  const handleGenderChange = (e) => {
    setData(e.target.value);
  };
  console.log(data);
  return (
    <Box spacing={3}>
      <FormControl>
        <FormLabel id="gender-group-label">Select your Gender?</FormLabel>
        <RadioGroup
          name="gender-group"
          aria-labelledby="gender-group-label"
          value={data}
          onChange={handleGenderChange}
          row // TODO: it is use to convert in verticel
        >
          <FormControlLabel
            control={<Radio color="secondary" size="small" />}
            label="Male"
            value="Male"
          />
          <FormControlLabel
            control={<Radio color="secondary" size="small" />}
            label="Female"
            value="Female"
          />
          <FormControlLabel
            control={<Radio color="secondary" size="small" />}
            label="Others"
            value="Others"
          />
        </RadioGroup>
        <FormHelperText>Invalid Selected</FormHelperText>
      </FormControl>
    </Box>
  );
};
