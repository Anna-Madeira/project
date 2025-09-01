"use client"

import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import {IconMap} from "../components/icons"
import { useDrawerContext } from "../contexts";

interface LayoutBase {
    children: React.ReactNode
    titulo: string,
   
}

export const LayoutBaseDePagina: React.FC<LayoutBase>= ({children, titulo,}) => {
const theme = useTheme();
    const IconComponent = IconMap.menu;
        const smDown = useMediaQuery(theme.breakpoints.down("sm"));
const {toggleDrawerOpen} = useDrawerContext();

    return(
<Box height="100%" display="flex" flexDirection="column" gap={1}>
    <Box padding={1} display="flex" alignItems="center" height={theme.spacing(12)} gap={1} >
      {smDown &&(
        <IconButton onClick={toggleDrawerOpen}>
        <IconComponent />
       </IconButton>
      )}
       
       <Typography variant="h5">
            {titulo}
       </Typography>
    
    </Box>
    <Box>
        Barra de ferramentas
    </Box>
    
<Box>
    {children}
</Box>
   
</Box>

 );

}