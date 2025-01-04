import {
  Box,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
} from "@mui/material";
import React, { useState } from "react";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const [skills, setSkills] = useState([]);

  const handleSkillsChange = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((item) => item !== e.target.value));
    }
  };

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  console.log(skills);
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="Dark Mode"
          control={<Switch checked={checked} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value="HTML"
              control={
                <Switch
                size="small"
                color="error"
                  checked={skills.includes("HTML")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="CSS"
              control={
                <Switch
                size="small"
                color="error"
                  checked={skills.includes("CSS")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="Javascript"
              value="Javascript"
              control={
                <Switch
                size="small"
                color="error"
                  checked={skills.includes("Javascript")}
                  onChange={handleSkillsChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiSwitch;
