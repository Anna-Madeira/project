"use client"

import { Box, Button, Divider, InputAdornment, Paper, TextField, useTheme } from "@mui/material";
import { IconMap } from "../icons";

interface FerramentasDeDetalheProps {

}

export const FerramentasDeDetalhe: React.FC <FerramentasDeDetalheProps> = () => {
        const theme = useTheme();
        const IconAdd = IconMap.add;
        const IconSave = IconMap.save;
        const IconDelete = IconMap.delete;
        const IconBack = IconMap.back;


    
    return(
       <Box 
       gap={1}
       marginX={1} 
       padding={1} 
       paddingX={2} 
       display="flex" 
       alignItems="center"
       height={theme.spacing(10)} 
       component={Paper}
        >
         <Button
        color="primary"
        disableElevation
        variant="contained"
        startIcon={<IconSave />}>
            Salvar
        </Button>
         <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<IconSave />}>
            Salvar e Voltar
        </Button>
         <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<IconDelete />}>
            Apagar
        </Button>
         <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<IconAdd />}>
            Novo
        </Button>

        <Divider variant="middle" orientation="vertical" />

         <Button
        color="primary"
        disableElevation
        variant="outlined"
        startIcon={<IconBack />}>
            Voltar
        </Button>


        </Box>
    );
}


