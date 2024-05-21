import { useState } from 'react';
import './App.css';
import { Formulario } from './components/Formulario/Formulario';

export interface Filme{
  nome: string;
  anoDeLancamento: string
}

function App() {
  const [filmes, setFilmes] = useState<Filme[]>([])
  function adicionarFilme(filme: Filme){
    setFilmes([...filmes, filme])
  }
  return (
    <div>
      <Formulario aoSubmeter={adicionarFilme}/>
    </div>
  );
}

export default App;