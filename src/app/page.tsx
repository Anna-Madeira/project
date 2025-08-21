"use client"
import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "./Shared/contexts";
import { AppRoutes } from "./Routes/index";
import { MenuLateral } from "./Shared/components";


export default function App() {
    return (
      <AppThemeProvider>
<BrowserRouter>
<MenuLateral/>
   <AppRoutes />
  </BrowserRouter>
</AppThemeProvider>
  );
}
