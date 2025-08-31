'use client'

import { BrowserRouter } from "react-router-dom";
import dynamic from 'next/dynamic';
import { AppRoutes } from "../Routes/index"; 
import { MenuLateral } from "../Shared/components";


const DynamicAppThemeProvider = dynamic(
  () => import('../Shared/contexts').then((mod) => mod.AppThemeProvider), 
  { ssr: false } 
);


export default function PaginaInicialPage() {
  return (
    <DynamicAppThemeProvider>
      <BrowserRouter>
      <MenuLateral>
        <AppRoutes />
      </MenuLateral>
      </BrowserRouter>
    </DynamicAppThemeProvider>
  );
}
