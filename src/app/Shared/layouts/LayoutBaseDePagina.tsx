"use client"

import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import {IconMap} from "../components/icons"
import { useDrawerContext } from "../contexts";
import { ReactNode } from "react";

interface LayoutBase {
    children: React.ReactNode
    titulo: string,
    barraDeFerramentas?: ReactNode;
   
}

export const LayoutBaseDePagina: React.FC<LayoutBase>= ({children, titulo, barraDeFerramentas}) => {
const theme = useTheme();
    const IconComponent = IconMap.menu;
        const smDown = useMediaQuery(theme.breakpoints.down("sm"));
                const mdDown = useMediaQuery(theme.breakpoints.down("md"));

const {toggleDrawerOpen} = useDrawerContext();

    return(
<Box height="100%" display="flex" flexDirection="column" gap={1}>
    <Box padding={1} display="flex" alignItems="center" gap={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>
      {smDown &&(
        <IconButton onClick={toggleDrawerOpen}>
        <IconComponent />
       </IconButton>
      )}
       
       <Typography 
       overflow="hidden"
       whiteSpace="nowrap"
      textOverflow="ellipses"
      variant={smDown? "h5" : mdDown ? "h4" : "h3"}
    >
            {titulo}
       </Typography>
    </Box>
    {barraDeFerramentas &&( 
    <Box>
        {barraDeFerramentas}
    </Box>)}

    <Box flex={1} overflow="auto">
        {children}
    </Box>
    </Box>

 );

}