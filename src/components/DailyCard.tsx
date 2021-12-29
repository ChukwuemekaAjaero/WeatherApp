import React, {FunctionComponent} from "react";
import {Box} from '@mui/material'

interface Props{
    date: Date;
    minTemp: number;
    maxTemp: number;
    isCelcius: boolean;
    weather: string;
}

interface State{

}

const boxStyle = {
    backgroundColor: 'red',
    height: '177px',
    width: '120px',
    opacity: 0.5
}

const DailyCard: FunctionComponent = () => {

    return(
        <Box component="div" p={1} style={{...boxStyle}}>

        </Box>
    )
}

export default DailyCard;