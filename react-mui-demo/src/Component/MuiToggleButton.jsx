import React, { useState } from "react";
import { Button, ToggleButtonGroup, ToggleButton, Stack } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MuiToggleButton = () => {
  const [formats, setFormats] = useState(null); // IF you want to add more data then take in array
  const handleFormatsChange = (event, newFormats) => {
    setFormats(newFormats);
  };
  console.log(formats);
  return (
    <Stack sx={{ mb: 5 }} direction="row">
      <ToggleButtonGroup
        aria-label="Formating Button"
        size="small"
        color="success"
        // orientation="vertical"  // by defaul is y-xyse and vertical means x-xyse
        value={formats}
        onChange={handleFormatsChange}
        exclusive // TODO: if you want to add only one value.
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underline" aria-label="underline">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default MuiToggleButton;
