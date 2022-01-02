import './App.css';
import React, {createContext, FunctionComponent, useContext, useMemo, useState} from "react";
import {Grid, PaletteMode, responsiveFontSizes, Button, useTheme} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import TodaySection from "./components/containers/TodaySection";
import InformationSection from "./components/containers/InformationSection";
import {getAppTheme} from "./styles/Theme";

// -------------------- INTERFACES --------------------

// -------------------- THEMING --------------------
const ColorModeContext = createContext({
    toggleColorMode: () => {
    }
});


// -------------------- COMPONENTS --------------------
const App: FunctionComponent = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext)
    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2} wrap={"wrap"}>
                <Grid item xs={12} md={4} style={{backgroundColor: `${theme.palette.secondary.main}`}}>
                    {/*<Button variant="contained" onClick={colorMode.toggleColorMode}>Test3</Button>*/}
                    <TodaySection theme={theme}/>
                </Grid>
                <Grid item xs={12} md={8} style={{backgroundColor: `${theme.palette.primary.main}`}}>
                    <InformationSection theme={theme}/>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

const ToggleColorMode: FunctionComponent = () => {

    const [mode, setMode] = useState<PaletteMode>('dark');
    const colorMode = useMemo(() => ({
            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) => prevMode === 'light' ? 'dark' : 'light',
                );
            },
        })
        , []);

    let theme = useMemo(() => createTheme(getAppTheme(mode)), [mode]);
    theme = responsiveFontSizes(theme);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default ToggleColorMode;