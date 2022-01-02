import React, { FunctionComponent } from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import WeatherImage from "./WeatherImage";

interface Props {
    date: Date;
    minTemp: number;
    maxTemp: number;
    isCelcius: boolean;
    weather: string;
}

interface State {}

//TODO: I'll need a function that compares the date passed to figure out if it needs to display tomorrow.
const DailyCard: FunctionComponent = () => {
    const theme = useTheme();

    const boxStyle = {
        backgroundColor: theme.palette.secondary.main,
        height: "177px",
        width: "120px",
    };

    return (
        <Box component="div" p={1} style={{ ...boxStyle }}>
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    <Typography
                        component="p"
                        color={theme.palette.text.primary}
                    >
                        Tomorrow
                    </Typography>
                </Grid>
                <Grid item>
                    <WeatherImage />
                </Grid>
                <Grid container justifyContent="space-around">
                    <Grid item>
                        <Typography
                            component="p"
                            color={theme.palette.text.primary}
                        >
                            11C
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            component="p"
                            color={theme.palette.text.secondary}
                        >
                            16C
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DailyCard;
