"use client"

import { BarraDeFerramentas } from "@/app/Shared/components";
import { LayoutBaseDePagina } from "@/app/Shared/layouts";

export const Dashboard = () => {

return(
    <LayoutBaseDePagina 
    titulo="Página Inicial"
    barraDeFerramentas={(
        <BarraDeFerramentas ShowSearchInput
        NewTextButton="Novo" />
    )}>
        Teste 123
    </LayoutBaseDePagina>

);
};