"use client"

import { Box, Button, InputAdornment, Paper, TextField, useTheme } from "@mui/material";

import { IconMap } from "../icons";
import { Enviroment } from "../../enviroments";



interface FerramentasDaListagemProps{
    SearchText? : string;
    ShowSearchInput? : boolean;
    ChangeSearchText? : (NewText: string) => void ;
    NewTextButton? : string;
    ShowNewButton? : boolean;
    ClickNewButton? : () => void ;
}


export const FerramentasDaListagem: React.FC<FerramentasDaListagemProps> = ({
     SearchText = "", ShowSearchInput= false, ChangeSearchText, NewTextButton = "Novo", ShowNewButton = true, ClickNewButton }) => {
    const theme = useTheme();
        const IconSearch = IconMap.pesquisar;
                const IconAdd = IconMap.add;

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

       {ShowSearchInput && (
         <TextField 
        size="small"
        placeholder={Enviroment.INPUT_DE_BUSCA}
        value={SearchText}
        onChange={(e) => ChangeSearchText?.(e.target.value)}
        slotProps={{
            input: {
        startAdornment: (
          <InputAdornment position="start">
            <IconSearch />
          </InputAdornment>
        ), }, }}
        /> 
       )}
        <Box flex={1} display="flex" justifyContent="end">
       {ShowNewButton && (
         <Button
        color="primary"
        disableElevation
        variant="contained"
        onClick={ClickNewButton}
        endIcon={<IconAdd />}>
            {NewTextButton}
        </Button>

       )}
       
        </Box>

       </Box>
    );
}