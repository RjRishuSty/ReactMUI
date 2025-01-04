import { Box, Rating, Stack } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRating = () => {
  const [value, setValue] = useState(null);
  const [define, setDefine] = useState(3.5);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  console.log(value);
  return (
    <Stack spacing={4}>
      {/* TODO: Some important props in rating (precision) (icon) (emptyIcon) (highlightSelectedOnly) */}
      <Box>
        <Rating
          size="large"
          value={value}
          onChange={handleChange}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          highlightSelectedOnly
        />
      </Box>
      {/* TODO: readOnly props in reating */}
      <Box>
        <Rating
          readOnly
          size="large"
          value={define}
          precision={0.5}
          icon={<FavoriteIcon color="error" />}
          emptyIcon={<FavoriteBorderIcon color="error" />}
        />
      </Box>
    </Stack>
  );
};

export default MuiRating;
