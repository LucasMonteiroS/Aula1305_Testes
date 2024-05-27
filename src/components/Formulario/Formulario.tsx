import { useState } from "react";
import { Filme } from '../../App'

interface FormularioProps{
    aoSubmeter: (filme: Filme)=>void
}

export const Formulario = ({ aoSubmeter } : FormularioProps)=>{
    const [filme, setFilme] = useState<Filme>({nome: '', anoDeLancamento: ''})
    const podeAdicionar = filme.nome && filme.anoDeLancamento;
    function adicionarFilme(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        if (anoValido(filme.anoDeLancamento)) {
            aoSubmeter(filme)
        } else {
            alert('Ano de lançamento inválido')
        }
    }

    function anoValido(ano: string){
        return ano.length === 4 && !isNaN(Number(ano))
    }

    return(
        <form onSubmit={adicionarFilme}>
            <input type="text" placeholder="Insira o nome do filme" onChange={evento => setFilme({...filme, nome: evento.target.value})} required/>
            <input type="text" placeholder="Digite o ano de lancamento" onChange={evento => setFilme({...filme, anoDeLancamento: evento.target.value})} required/>
            <button disabled={!podeAdicionar} type="submit">Adicionar</button>
        </form>
    )
}