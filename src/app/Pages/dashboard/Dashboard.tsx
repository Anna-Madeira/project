import { FerramentasDeDetalhe } from '../../Shared/components';
import { LayoutBaseDePagina } from '../../Shared/layouts';


export const Dashboard = () => {

  return (
    <LayoutBaseDePagina
      titulo='Página inicial'
      barraDeFerramentas={(
        <FerramentasDeDetalhe
          mostrarBotaoNovo
          mostrarBotaoSalvarEFechar
          mostrarBotaoSalvarEFecharCarregando
          mostrarBotaoVoltar={false}
        />
      )}
    >
      Testando
    </LayoutBaseDePagina>
  );
};