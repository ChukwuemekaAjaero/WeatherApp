import React, { FunctionComponent } from "react";
import {
    Box,
    Grid,
    Typography,
    useTheme,
    styled,
    LinearProgress,
    linearProgressClasses,
} from "@mui/material";

interface Props {}

interface State {}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#FFFFFF",
    },
}));

const HumidityCard: FunctionComponent<Props> = () => {
    const theme = useTheme();
    const boxStyle = {
        backgroundColor: theme.palette.secondary.main,
        height: "204px",
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
                        Humidity
                    </Typography>
                </Grid>
                <Grid container direction="row"></Grid>
                <Grid item>
                    <Typography
                        component="h3"
                        variant="h3"
                        color={theme.palette.text.primary}
                    >
                        842%
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        component="p"
                        color={theme.palette.text.primary}
                    >
                        0%
                    </Typography>
                    <BorderLinearProgress
                        variant="determinate"
                        value={80}
                        style={{ width: "185px" }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default HumidityCard;
