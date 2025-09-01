"use client"
import { Navigate, Route, Routes, } from "react-router-dom";
import React from 'react';
import { Button } from "@mui/material";

import { useDrawerContext} from '../Shared/contexts'


export const AppRoutes = () => {
   const {toogleDrawerOpen} = useDrawerContext();


return(
   <Routes>
      <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toogleDrawerOpen}>Toogle Drawer</Button>} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
);  

}