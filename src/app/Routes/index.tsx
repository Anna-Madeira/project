"use client"
import { Navigate, Route, Routes, } from "react-router-dom";
import React from 'react';
import { Button } from "@mui/material";

import {useAppThemeContext} from '../Shared/contexts'


export const AppRoutes = () => {
   const {toogleTheme} = useAppThemeContext();


return(
   <Routes>
      <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toogleTheme}>Toogle Theme</Button>} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
);  

}