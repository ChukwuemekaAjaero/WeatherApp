// -------------------- IMPORTS --------------------
import React from "react";
import { Box, Grid, Theme, Typography, useTheme } from "@mui/material";
import DailyCard from "../DailyCard";
import { mockData } from "../../mock/mockData";
import WindStatusCard from "../WindStatusCard";
import HumidityCard from "../HumidityCard";
import VisibilityCard from "../VisibilityCard";
import AirPressureCard from "../AirPressureCard";

// -------------------- INTERFACES --------------------

interface Props {
  theme: Theme;
}

interface State {}

// -------------------- STYLES --------------------

//TODO: Make the padding and colour dynamic (use the theme)
const styleTest = {
  width: "192px",
  height: "169px",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "144px",
  lineHeight: "169px",
};

const celciusStyles = {
  backgroundColor: "white",
  display: "inline",
  borderRadius: "50%",
  fontWeight: 700,
};

const InformationSection = (props: Props) => {
  const { theme } = props;
  const dailyCards = mockData.map((item) => {
    return (
      <Grid item m={2} key={item.id}>
        <DailyCard />
      </Grid>
    );
  });

  return (
    <Box component="div" p={4}>
      <Grid container direction="column" alignItems="center">
        <Grid container direction="row-reverse">
          <Grid item p={2}>
            <Typography
              component="p"
              variant="body1"
              style={{ ...celciusStyles }}
              m={2}
              p={1}
            >
              °C
            </Typography>
            <Typography
              component="p"
              variant="body1"
              style={{ ...celciusStyles }}
              m={2}
              p={1}
            >
              °F
            </Typography>
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          {dailyCards}
        </Grid>
        <Grid container>
          <Grid item>
            <Typography
              component="h3"
              variant="h3"
              style={{ fontSize: "24px" }}
              color={theme.palette.text.primary}
            >
              Today's Highlights
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item m={2}>
            <WindStatusCard />
          </Grid>
          <Grid item m={2}>
            <HumidityCard />
          </Grid>
          <Grid item m={2}>
            <VisibilityCard />
          </Grid>
          <Grid item m={2}>
            <AirPressureCard />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InformationSection;
