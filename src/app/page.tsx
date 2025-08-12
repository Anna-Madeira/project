"use client"
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes";
import { ThemeProvider } from "@mui/material";
import { LightTheme } from "./Shared/themes";
export default function App() {
    return (
      <ThemeProvider theme={LightTheme}>
  <BrowserRouter>
   <AppRoutes />
  </BrowserRouter>
      </ThemeProvider>


  
  );
}
