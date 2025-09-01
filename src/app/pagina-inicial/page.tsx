'use client'

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "../Routes/index"; 
import { MenuLateral } from "../Shared/components";
import { DrawerProvider, AppThemeProvider} from "../Shared/contexts";





export default function PaginaInicialPage() {
  return (
        <AppThemeProvider>
          <DrawerProvider>
      <BrowserRouter>
      <MenuLateral>
        <AppRoutes />
      </MenuLateral>
      </BrowserRouter>
        </DrawerProvider>
    </AppThemeProvider>
  );
}
