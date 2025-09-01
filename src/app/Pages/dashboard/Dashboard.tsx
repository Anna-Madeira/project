"use client"

import { FerramentasDaListagem, FerramentasDeDetalhe } from "@/app/Shared/components";
import { LayoutBaseDePagina } from "@/app/Shared/layouts";

export const Dashboard = () => {

return(
    <LayoutBaseDePagina 
    titulo="Página Inicial"
    barraDeFerramentas={(
        <FerramentasDeDetalhe />
    )}
    >
        Teste 123
    </LayoutBaseDePagina>

);
};