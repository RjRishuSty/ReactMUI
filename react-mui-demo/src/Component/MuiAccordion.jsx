import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const handlerChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box padding="4rem">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handlerChange(isExpanded, "panel1")}
      >
        {/* TODO: Accordion Summary main Props are => id , aria-controls, expandIcon */}
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Your TextField with the PersonIcon is not working as intended
            because startAdornment is mistakenly placed inside inputProps. It
            should instead be within InputProps. Here's the corrected code:
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* TODO: Accoridon 2 */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handlerChange(isExpanded, "panel2")}
      >
        {/* TODO: Accordion Summary main Props are => id , aria-controls, expandIcon */}
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Your TextField with the PersonIcon is not working as intended
            because startAdornment is mistakenly placed inside inputProps. It
            should instead be within InputProps. Here's the corrected code:
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* TODO: Accordion 3 */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handlerChange(isExpanded, "panel3")}
      >
        {/* TODO: Accordion Summary main Props are => id , aria-controls, expandIcon */}
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Your TextField with the PersonIcon is not working as intended
            because startAdornment is mistakenly placed inside inputProps. It
            should instead be within InputProps. Here's the corrected code:
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MuiAccordion;
