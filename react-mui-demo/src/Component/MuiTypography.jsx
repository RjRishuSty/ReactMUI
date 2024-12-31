import React from "react";
// TODO: First work is Import to the Typography in @mui;
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <>
      {/* Variant h1 to h6 */}
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2">H2 Heading</Typography>
      <Typography variant="h3">H3 Heading</Typography>
      <Typography variant="h4">H4 Heading</Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h6">H6 Heading</Typography>

      {/* subtitle 1 or subtitle 2 */}
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      {/* body1 or body2  for long text just like paragraph*/}
      <Typography variant="body1">
        In React, createContext is used to create a context that allows you to
        share state or values between components without having to pass them
        down manually through props. Here’s how to use createContext in React:
      </Typography>
      {/* Body 1 is the default bavire of typography */}
      <Typography variant="body2">
        In React, createContext is used to create a context that allows you to
        share state or values between components without having to pass them
        down manually through props. Here’s how to use createContext in React:
      </Typography>

      {/* Conponent to change the html tag */}

      <Typography variant="h2" component="h1">
        Hello H1
      </Typography>

      {/* gutterBottom is set margin bottom in Typograpy */}
      <Typography variant="h2" gutterBottom>
        GutterBottom margin
      </Typography>

      {/* BUtton */}
      <Typography variant="button" gutterBottom>
        {" "}
        Button Text
      </Typography>

      {/* caption in Typograpy */}
      <Typography variant="caption" gutterBottom>
        Caption Text
      </Typography>

      {/* ovarline*/}
      <Typography variant="overline" gutterBottom>
        Overline Text
      </Typography>
    </>
  );
};
export default MuiTypography;
