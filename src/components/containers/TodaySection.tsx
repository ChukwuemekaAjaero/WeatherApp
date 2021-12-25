// -------------------- IMPORTS --------------------
import React, {FunctionComponent, Fragment, useState, MouseEvent} from "react";
import {Weather} from "../common/interfaces";
import {Button, Grid, Box, Typography, Drawer, Input, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent} from "@mui/material";
import {MyLocation} from "@mui/icons-material";
import WeatherImage from "../WeatherImage";

// -------------------- INTERFACES --------------------

interface Props {
    className?: string;
}

interface State {
    weather: Weather;
}

// -------------------- STYLES --------------------
const iconStyle = {
    backgroundColor: "white",
    borderRadius: "50%"
}

const headerStyles = {
}

// -------------------- COMPONENT --------------------

const TodayContainer: FunctionComponent<Props> = () => {
    const [drawer, setDrawer] = useState(false);

    const toggleDrawer = (open: boolean) => (event: MouseEvent) => {
        setDrawer(open);
    }

    return (
        <Box component="div" p={4}>
            <Grid container direction="column" alignItems="center">
                <Grid container direction="row" justifyContent="space-between" p={2}>
                    <Grid item>
                        <Button variant="contained" style={{...headerStyles}} onClick={toggleDrawer(true)}>Search for places</Button>
                        <Drawer anchor="left" open={drawer} onClose={toggleDrawer(false)}>
                            <Grid container direction="column" alignItems="center">
                                <Grid container direction="row" justifyContent="space-between" p={2}>
                                    <Grid item>
                                        <Input id="2"></Input>
                                    </Grid>
                                    <Grid item>
                                        <Button>Search</Button>
                                    </Grid>
                                </Grid>
                                <Grid item>

                                </Grid>
                            </Grid>
                        </Drawer>
                    </Grid>
                    <Grid item>
                        <MyLocation style={{...iconStyle}}/>
                    </Grid>
                </Grid>
                <Grid item p={2}>
                    <WeatherImage/>
                </Grid>
                <Grid item p={2}>
                    <Button variant="contained" style={{...headerStyles}}>Search for places</Button>
                    <MyLocation style={{...iconStyle}}/>
                </Grid>
                <Grid item p={2}>
                    <Button variant="contained" style={{...headerStyles}}>Search for places</Button>
                    <MyLocation style={{...iconStyle}}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TodayContainer;