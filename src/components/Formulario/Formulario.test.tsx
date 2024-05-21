import { render } from "@testing-library/react"
import { Formulario } from "./Formulario"
import userEvent from '@testing-library/user-event';

describe('Formulario', () => {
    const mockAoSubmeter = jest.fn()
    test('Se os campos estiverem vazios, o botão deve estar desabilitado', () => {
        const { getByPlaceholderText, getByRole } = render(<Formulario aoSubmeter={mockAoSubmeter}/>)
    
        const inputNome = getByPlaceholderText('Insira o nome do filme')
        const inputAnoDeLancamento = getByPlaceholderText('Digite o ano de lancamento')
    
        const botaoAdicionar = getByRole('button')
    
        expect(inputNome).toBeInTheDocument()
        expect(inputAnoDeLancamento).toBeInTheDocument()
    
        expect(botaoAdicionar).toBeDisabled()
    })
    test('Se os campos estiverem preenchidos, o botão deve estar habilitado', async () => {
        const { getByPlaceholderText, getByRole } = render(<Formulario aoSubmeter={mockAoSubmeter}/>)
    
        const inputNome = getByPlaceholderText('Insira o nome do filme')
        const inputAnoDeLancamento = getByPlaceholderText('Digite o ano de lancamento')
    
        const botaoAdicionar = getByRole('button')
    
        expect(inputNome).toBeInTheDocument()
        expect(inputAnoDeLancamento).toBeInTheDocument()
        
        await userEvent.type(inputNome, 'Filme')
        await userEvent.type(inputAnoDeLancamento, '2021')

        await userEvent.click(botaoAdicionar)
        expect(botaoAdicionar).toBeEnabled()
    })
})