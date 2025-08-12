import { createTheme } from "@mui/material";
import { pink, purple } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: pink[700],
            dark: pink[800],
            light: pink[500],
            contrastText: "#ffffff" ,
        },
        secondary: {
             main: purple[500],
            dark: purple[400],
            light: purple[300],
            contrastText: "#ffffff" ,
        },
        background:{
            default: "#f7f6f3",
            paper: "#ffffff",
        }
    }
});