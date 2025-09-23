"use client"

import { Box, Button, InputAdornment, Paper, TextField, useTheme } from "@mui/material";
import { IconMap } from "../icons";
import { Environment } from "../../environment";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';



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
    const navigate = useNavigate();
        const IconSearch = IconMap.pesquisar;
        const handleNewButtonClick = () => {
navigate('../../../Pages/pessoas/DetalheDePessoa.tsx', { replace: true });};
               
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
        placeholder={Environment.INPUT_DE_BUSCA}
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
        onClick={handleNewButtonClick}
        endIcon={<AddIcon />} >
            {NewTextButton}
        </Button>

       )}
       
        </Box>

       </Box>
    );
}