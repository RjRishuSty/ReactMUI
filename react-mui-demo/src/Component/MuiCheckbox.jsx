import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiCheckbox = () => {
  const [accepted, setAccepted] = useState(false);
  const [skills, setSkills] = useState([]);
  const handleSkillsChange = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((item) => item !== e.target.value));
    }
    console.log(index);
  };

  const handleChange = (e) => {
    setAccepted(e.target.checked);
  };
  console.log(skills);
  return (
    <Box>
      {/* TODO: Default Checkbox in mui */}
      <Box>
        <FormControlLabel
          label=" I accept terms and condations."
          control={<Checkbox checked={accepted} onChange={handleChange} />}
        />
      </Box>
      {/* TODO: Only Icon with checkbox */}
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={accepted}
          onChange={handleChange}
        />
      </Box>
      {/* TODO: Checkbox group in mui */}
      <Box>
        <FormControl>
          <FormLabel>SKills</FormLabel>
          <FormGroup row>
            {/* TODO: Row is use to convert in vertical */}
            <FormControlLabel
              label="HTML"
              value="html"
              control={
                <Checkbox
                  color="success"
                  size="medium"
                  checked={skills.includes("html")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="css"
              control={
                <Checkbox
                  color="success"
                  size="medium"
                  checked={skills.includes("css")}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="JavaScript "
              value="javascript"
              control={
                <Checkbox
                  color="success"
                  size="medium"
                  checked={skills.includes("javascript")}
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

export default MuiCheckbox;
