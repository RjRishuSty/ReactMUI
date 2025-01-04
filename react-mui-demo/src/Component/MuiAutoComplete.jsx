import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Mui",
  "Bootstrap",
  "TypeScript",
];
const MuiAutoComplete = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <>
      <Stack spacing={4}>
        {/* TODO: Autocomplete important props (options:- it takes array of data)  , (renderInput:- it is a callback function)*/}
        <Autocomplete
          options={skills}
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          renderInput={(params) => <TextField {...params} label="Skills" />}
        />
      </Stack>

      {/* TODO: Autocomplete important props (freeSolo :- its means you want to write somethings ) */}
      <Stack spacing={4} mt={5}>
        <Autocomplete
          options={skills}
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          renderInput={(params) => <TextField {...params} label="Skills" />}
          freeSolo
        />
      </Stack>
    </>
  );
};

export default MuiAutoComplete;
