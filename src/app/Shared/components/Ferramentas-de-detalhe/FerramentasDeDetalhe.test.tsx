import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { FerramentasDeDetalhe } from './FerramentasDeDetalhe'

const theme = createTheme()

function renderComTema(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)
}

describe('FerramentasDeDetalhe', () => {
  it('renderiza os botões padrão', () => {
    renderComTema(<FerramentasDeDetalhe />)

    expect(screen.getByText('Salvar')).toBeInTheDocument()
    expect(screen.getByText('Apagar')).toBeInTheDocument()
    expect(screen.getByText('Novo')).toBeInTheDocument()
    expect(screen.getByText('Voltar')).toBeInTheDocument()
  })

  it('respeita o texto customizado do botão novo', () => {
    renderComTema(<FerramentasDeDetalhe textoBotaoNovo="Adicionar" />)

    expect(screen.getByText('Adicionar')).toBeInTheDocument()
  })

  it('chama aoClicarEmSalvar ao clicar em Salvar', async () => {
    const aoClicarEmSalvar = jest.fn()
    const user = userEvent.setup()

    renderComTema(<FerramentasDeDetalhe aoClicarEmSalvar={aoClicarEmSalvar} />)

    await user.click(screen.getByText('Salvar'))

    expect(aoClicarEmSalvar).toHaveBeenCalledTimes(1)
  })

  it('não renderiza o botão apagar quando mostrarBotaoApagar é falso', () => {
    renderComTema(<FerramentasDeDetalhe mostrarBotaoApagar={false} />)

    expect(screen.queryByText('Apagar')).not.toBeInTheDocument()
  })
})
