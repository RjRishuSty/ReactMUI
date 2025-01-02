import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

const MuiTextField = () => {
  // TODO: Inputs Props are {1:InputProps={{readOnly and startAdornment,endAdornment}}}
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        {/* TODO: textField default variant is outlined  */}
        <TextField label="Name" variant="outlined" />
        <TextField label="Last Name" variant="filled" />
        <TextField label="email" variant="standard" />
      </Stack>

      {/* TODO:Colors in TextFields */}

      <Stack spacing={5}>
        <TextField
          label="Small secondary"
          size="small"
          color="secondary"
          variant="outlined"
        />
      </Stack>
      {/* TODO: Required */}
      <Stack spacing={5}>
        <TextField label="Required" size="large" color="error" required />
      </Stack>

      {/* TODO: HelperText in TextField */}
      <Stack spacing={5}>
        <TextField
          label="Helper Text"
          helperText="Do not share your OTP in Other"
        />
      </Stack>

      <Stack spacing={5} direction="row">
        {/* TODO: Type in TextField */}
        <TextField type="date" />

        {/* TODO: Disable in textField */}
        <TextField type="time" disabled />

        {/* TODO: Readonly in textField */}
        <TextField
          label="Read Only"
          inputProps={{ readOnlu: true }}
          value="abc"
        />
      </Stack>
      {/* TODO: InputAdornment in TextField */}
      <Stack spacing={5} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>

      {/* TODO:  Validation on TextField */}
      <TextField
        label="OTP"
        value={value}
        size="small"
        color="success"
        type="number"
        variant="standard"
        onChange={(e) => setValue(e.target.value)}
        error={!value}
        helperText={!value ? "Required" : "Do not share OTP"}
      />
    </Stack>
  );
};

export default MuiTextField;
