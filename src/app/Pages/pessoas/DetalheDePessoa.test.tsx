import '@/app/shared/forms/TraducoesYup'

import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { DetalheDePessoas } from './DetalheDePessoa'

jest.mock('react-router-dom', () => ({
  useParams: () => ({ id: 'nova' }),
  useNavigate: () => jest.fn(),
}))

jest.mock('@/app/shared/services/api/cidades/CidadesService', () => ({
  CidadesService: {
    getAll: jest.fn().mockResolvedValue({ data: [], totalCount: 0 }),
  },
}))

const theme = createTheme()

function renderComTema(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)
}

describe('DetalheDePessoas - validação do formulário', () => {
  it('exibe a mensagem de erro do Yup no campo Nome completo quando ele está vazio', async () => {
    const user = userEvent.setup()

    renderComTema(<DetalheDePessoas />)

    const inputNome = await screen.findByLabelText('Nome completo')
    expect(inputNome).toHaveAttribute('aria-invalid', 'false')

    await user.click(screen.getByText('Salvar'))

    await waitFor(() => {
      expect(inputNome).toHaveAttribute('aria-invalid', 'true')
    })

    const helperTextId = inputNome.getAttribute('aria-describedby')
    expect(helperTextId).toBeTruthy()
    expect(document.getElementById(helperTextId as string)).toHaveTextContent('O campo precisa ter pelo menos 3 caracteres')
  })
})
