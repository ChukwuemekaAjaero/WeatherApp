// -------------------- IMPORTS --------------------
import React, {
  FunctionComponent,
  Fragment,
  useState,
  MouseEvent,
} from "react";
import { Weather } from "../common/interfaces";
import { Button, Grid, Box, Typography, Theme } from "@mui/material";
import { MyLocation, LocationOn } from "@mui/icons-material";
import WeatherImage from "../WeatherImage";
import SearchDrawer from "../SearchDrawer";

// -------------------- INTERFACES --------------------

interface Props {
  className?: string;
  theme: Theme;
}

interface State {
  weather: Weather;
}

// -------------------- STYLES --------------------

//TODO: Make the padding and colour dynamic (use the theme)
const iconStyle = {
  color: "#E7E7EB",
  backgroundColor: "#A09FB1",
  borderRadius: "50%",
  padding: "4px",
};

const locationIconStyles = {
  color: "#88869D",
  position: "relative",
  top: "5px",
};

const temperatureStyle = {
  width: "192px",
  height: "169px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "169px",
};

// -------------------- COMPONENT --------------------

const TodaySection = (props: Props) => {
  const { theme } = props;
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = (open: boolean) => (event: MouseEvent) => {
    setDrawer(open);
  };

  return (
    <Box component="div" p={4}>
      <Grid container direction="column" alignItems="center">
        <Grid container direction="row" justifyContent="space-between" p={2}>
          <Grid item>
            <Button variant="contained" onClick={toggleDrawer(true)}>
              Search for places
            </Button>
            <SearchDrawer open={drawer} toggleDrawer={toggleDrawer(false)} />
          </Grid>
          <Grid item>
            <MyLocation style={{ ...iconStyle }} />
          </Grid>
        </Grid>
        <Grid item p={2}>
          <WeatherImage />
        </Grid>
        <Grid item p={2} style={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            component="h1"
            color={theme.palette.text.primary}
            style={{ ...temperatureStyle }}
          >
            15°C
          </Typography>
        </Grid>
        <Grid item p={2}>
          <Typography
            variant="h2"
            component="h2"
            color={theme.palette.text.secondary}
          >
            Shower
          </Typography>
        </Grid>
        <Grid item p={2}>
          <Typography
            variant="body1"
            component="p"
            color={theme.palette.text.tertiary}
          >
            Today • Fri. 5 Jan
          </Typography>
        </Grid>
        <Grid item p={2}>
          <LocationOn style={{ ...locationIconStyles }} display="inline" />
          <Typography
            variant="body1"
            component="p"
            display="inline"
            color={theme.palette.text.tertiary}
          >
            Helsinki
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TodaySection;
