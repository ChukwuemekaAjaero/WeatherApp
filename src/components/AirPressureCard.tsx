import React, { FunctionComponent } from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";

interface Props {}

interface State {}

const AirPressureCard: FunctionComponent<Props> = () => {
    const theme = useTheme();
    const boxStyle = {
        backgroundColor: theme.palette.secondary.main,
        height: "160px",
        width: "328px",
    };

    return (
        <Box component="div" p={1} style={{ ...boxStyle }}>
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    <Typography
                        component="p"
                        color={theme.palette.text.primary}
                    >
                        Air Pressure
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AirPressureCard;
