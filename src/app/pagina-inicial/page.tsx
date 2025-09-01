'use client'

import { BrowserRouter } from "react-router-dom";
import dynamic from 'next/dynamic';
import { AppRoutes } from "../Routes/index"; 
import { MenuLateral } from "../Shared/components";
import { DrawerProvider } from "../Shared/contexts";


const DynamicAppThemeProvider = dynamic(
  () => import('../Shared/contexts').then((mod) => mod.AppThemeProvider), 
  { ssr: false } 
);


export default function PaginaInicialPage() {
  return (
        <DynamicAppThemeProvider>
          <DrawerProvider>
      <BrowserRouter>
      <MenuLateral>
        <AppRoutes />
      </MenuLateral>
      </BrowserRouter>
        </DrawerProvider>
    </DynamicAppThemeProvider>
  );
}
