// TODO: Import Material Button and etc.....
import { Button, ButtonGroup, IconButton, Stack } from "@mui/material";
// TODO: Import Material Icon ..
import SendIcon from "@mui/icons-material/Send";
import React from "react";

const MuiButton = () => {
  return (
    <>
      {/*TODO: This is variant text contained outlined */}
      <Stack spacing={2} direction="row" sx={{ mb: 5 }}>
        <Button variant="text">Text Variant</Button>
        <Button variant="contained">Contained Variant</Button>
        <Button variant="outlined">Outlined variant</Button>
      </Stack>

      {/* TODO: if to add herf atteributes the button become a tage  */}
      <Stack spacing={2} direction="row" sx={{ mb: 5 }}>
        <Button variant="text" href="https://google.com">
          Text Variant
        </Button>
      </Stack>

      {/* TODO: color in mui Button */}
      <Stack spacing={2} direction="row" sx={{ mb: 5 }}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
      </Stack>

      {/* TODO: The size of button in mui */}
      <Stack display="block" spacing={2} direction="row" sx={{ mb: 5 }}>
        <Button variant="contained" color="error" size="small">
          Small
        </Button>
        <Button variant="contained" color="error" size="mediun">
          Mediun
        </Button>
        <Button variant="contained" color="error" size="large">
          Large
        </Button>
      </Stack>

      {/* TODO: If you want to add icon in button of mui then use (startIcon) add begin of button and end of use (endIcon) */}
      <Stack spacing={2} direction="row" sx={{ mb: 5 }}>
        <Button variant="contained" color="warning" startIcon={<SendIcon />}>
          {" "}
          Send
        </Button>
        <Button variant="contained" color="error" endIcon={<SendIcon />}>
          Send
        </Button>

        {/* TODO: only icon button then use iconButton */}
        <IconButton
          aria-label="send"
          variant="contained"
          color="success"
          size="large"
        >
          <SendIcon />
        </IconButton>
        {/* TODO: use of disableElevation disable Ripple*/}
        {/* TODO: disableRipple => Disables the ripple effect that occurs when a user interacts with the component (like clicking a button). */}
        {/* TODO:  disableElevation => Disables the shadow or elevation effect for components, which is typically part of the Material Design look. */}
        <Button
          variant="contained"
          color="warning"
          startIcon={<SendIcon />}
          disableElevation
        >
          {" "}
          Send
        </Button>
        <Button
          variant="contained"
          color="success"
          startIcon={<SendIcon />}
          disableRipple
        >
          {" "}
          Send
        </Button>
      </Stack>

      {/* TODO: ButtonGroup in Mui */}

      <Stack spacing={2} direction="row" sx={{ mt: 5 }}>
        <Stack>
          {/* This is default buttonGroup in mui */}
          <ButtonGroup variant="contained" color="secondary" size="small">
            <Button onClick={() => alert("Clicked Left")}>Left</Button>
            <Button onClick={() => alert("Clicked Center")}>Center</Button>
            <Button onClick={() => alert("Clicked RIght")}>RIght</Button>
          </ButtonGroup>
        </Stack>

        {/* TODO: if you want to show in vertical then add orientation */}
        <ButtonGroup
          variant="contained"
          color="error"
          size="large"
          orientation="vertical"
          aria-label="vertical buttonGroup"
        >
          <Button onClick={() => alert("Clicked Left")}>Left</Button>
          <Button onClick={() => alert("Clicked Center")}>Center</Button>
          <Button onClick={() => alert("Clicked Right")}>RIght</Button>
        </ButtonGroup>
      </Stack>
    </>
  );
};

export default MuiButton;
