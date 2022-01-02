import { PaletteMode } from "@mui/material";

//TODO: Set the colours for the light mode version.
export const getAppTheme = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === "dark" ? darkModeOptions : lightModeOptions),
    },
    typography: {
        fontFamily: ["Raleway"],
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 0,
                    color: mode === "dark" ? "#E7E7EB" : "#FFFFFF",
                    backgroundColor: mode === "dark" ? "#6E707A" : "#FFFFFF",
                },
            },
        },
    },
});

const darkModeOptions = {
    primary: {
        main: "#1E213A",
        contrastText: "#fff",
    },
    secondary: {
        main: "#100E1D",
        contrastText: "#fff",
    },
    text: {
        primary: "#E7E7EB",
        secondary: "#A09FB1",
        tertiary: "#88869D",
    },
};

const lightModeOptions = {
    primary: {
        main: "#757DE8",
    },
    secondary: {
        main: "#FF7961",
    },
};
