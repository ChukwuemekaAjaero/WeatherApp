// -------------------- IMPORTS --------------------
import React from "react";
import {Typography} from "@mui/material";

// -------------------- INTERFACES --------------------

interface DailyCardSectionProps {

}

interface DailyCardSectionState {

}

// -------------------- STYLES --------------------
const styleTest = {
    fontWeight: 400
}

const DailyCardContainer =  (props: DailyCardSectionProps) => {
    return (
        <Typography variant='h1' component='h1' style={{...styleTest}}>
            Daily Container
        </Typography>
    )
}

export default DailyCardContainer;