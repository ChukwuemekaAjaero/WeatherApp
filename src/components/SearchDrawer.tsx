import React, { FunctionComponent, Fragment, MouseEvent } from "react";
import { Button, Drawer, Grid, Input } from "@mui/material";

interface Props {
  open: boolean;
  toggleDrawer: (event: MouseEvent) => void;
}

interface State {}

// TODO: Have a way to save a user's searches. This should be done in localStorage as I'm not connecting to a DB.
// TODO: Modify the Drawer with to match the width of the TodaySection.

const SearchDrawer: FunctionComponent<Props> = (props: Props) => {
  return (
    <Drawer anchor="left" open={props.open} onClose={props.toggleDrawer}>
      <Grid container direction="column" alignItems="center">
        <Grid container direction="row" justifyContent="space-between" p={2}>
          <Grid item>
            <Input id="2"></Input>
          </Grid>
          <Grid item>
            <Button>Search</Button>
          </Grid>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Drawer>
  );
};

export default SearchDrawer;
