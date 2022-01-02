import React, { Fragment, FunctionComponent } from "react";
import { Box } from "@mui/material";
import Clear from "../static/Clear.png";
import CloudBackground from "../static/Cloud-background.png";
import ThunderStorm from "../static/Thunderstorm.png";

//TODO: Can't define the props until I know what is returned from the network request.
interface Props {}

interface State {}

const WeatherImage: FunctionComponent = () => {
  return (
    <Box component="div" p={2}>
      <img width="100%" src={ThunderStorm} />
    </Box>
  );
};
export default WeatherImage;
