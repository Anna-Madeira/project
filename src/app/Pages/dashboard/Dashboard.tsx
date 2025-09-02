"use client"

import { FerramentasDeDetalhe } from "@/app/Shared/components";
import { LayoutBaseDePagina } from "@/app/Shared/layouts";

export const Dashboard = () => {

return(
    <LayoutBaseDePagina 
    titulo="Página Inicial"
    barraDeFerramentas={(
        <FerramentasDeDetalhe mostrarBotaoSalvarEFechar />
    )}>
        Teste
    </LayoutBaseDePagina>

);
};