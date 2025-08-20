"use client"
import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "./Shared/contexts";
import { AppRoutes } from "./Routes/index";
import dynamic from 'next/dynamic'; 

const DynamicAppThemeProvider = dynamic(
  () => import('./Shared/contexts').then((mod) => mod.AppThemeProvider),
  { ssr: false } // Crucial: não renderizar no servidor
);

export default function App() {
    return (
      <DynamicAppThemeProvider>
<BrowserRouter>
   <AppRoutes />
  </BrowserRouter>
</DynamicAppThemeProvider>
  );
}
