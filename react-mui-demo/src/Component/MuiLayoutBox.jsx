import { Box } from "@mui/material";
import React from "react";

const MuiLayoutBox = () => {
  return <Box component='div' sx={{
    backgroundColor:'primary.main',
    color:"white",
    width:'100%',
    height:'100px',
    padding:'16px',
    textAlign:'center',
    '&:hover':{
      backgroundColor:'primary.light'
    }
  }}>Codevolution</Box>;
};

export default MuiLayoutBox;
