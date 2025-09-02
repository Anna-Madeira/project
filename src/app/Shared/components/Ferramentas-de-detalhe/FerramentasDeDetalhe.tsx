"use client"

import { Box, Button, Divider, Paper, Skeleton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { IconMap } from "../icons";
import { Theme } from "@emotion/react";

interface FerramentasDeDetalheProps {
    textoBotaoNovo?: string,
    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarEFechar?: boolean;


  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;
  mostrarBotaoSalvarEFecharCarregando?: boolean;

    aoClicaremNovo?: () => void;
    aoClicaremVoltar?: () => void;
    aoClicaremApagar?: () => void;
    aoClicaremSalvar?: () => void;
    aoClicaremSalvareFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC <FerramentasDeDetalheProps> = ({
    textoBotaoNovo = "Novo",
    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarEFechar = false,

    mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,


    aoClicaremNovo,
    aoClicaremVoltar,
    aoClicaremApagar,
    aoClicaremSalvar,
    aoClicaremSalvareFechar,
}) => {
        const theme = useTheme();
        const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
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
        {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
          <Button
        color="primary"
        disableElevation
        variant="contained"
        onClick={aoClicaremSalvar}
        startIcon={<IconSave />}>
            <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
            Salvar
          </Typography>
            
            </Button>
         )}

         {mostrarBotaoSalvarCarregando && (
        <Skeleton width={110} height={60} />
      )}


        {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (
             <Button
        color="primary"
        disableElevation
        variant="outlined"
        onClick={aoClicaremSalvareFechar}
        startIcon={<IconSave />}>
          <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
            Salvar e voltar
          </Typography>
        </Button>
        )}

        {(mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (
        <Skeleton width={180} height={60} />
      )}

        {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
            <Button
        color="primary"
        disableElevation
        variant="outlined"
        onClick={aoClicaremApagar}
        startIcon={<IconDelete />}>
            <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
            Apagar
          </Typography>
        </Button>
        )}

        {mostrarBotaoApagarCarregando && (
        <Skeleton width={110} height={60} />
      )}
      
          {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) && (
             <Button
        color="primary"
        disableElevation
        variant="outlined"
        onClick={aoClicaremNovo}
        startIcon={<IconAdd />}>
            <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
            {textoBotaoNovo}
          </Typography>
            </Button>
         )}
         
          {(mostrarBotaoNovoCarregando && !smDown)&&(
        <Skeleton width={110} height={60} />
      )}

        {
        (
          mostrarBotaoVoltar &&
          (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarEFechar)
        ) && (
          <Divider variant='middle' orientation='vertical' />
        )
      }
        {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
            <Button
        color="primary"
        disableElevation
        variant="outlined"
        onClick={aoClicaremVoltar}
        startIcon={<IconBack />}>
             <Typography variant='button' whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
            Voltar
          </Typography>
        </Button>
        )}
         

        {mostrarBotaoVoltarCarregando && (
        <Skeleton width={110} height={60} />
      )}
        </Box>
    );
}


